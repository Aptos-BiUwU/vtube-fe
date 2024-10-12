import IceCream from "@/assets/images/icecream.png";
import ChannelInfo from "@/components/ChannelInfo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Facebook, Heart, Twitter } from "lucide-react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Discord from "@/assets/icons/discord.svg?react";
import Rank1 from "@/assets/icons/rank1.svg?react";
import Rank2 from "@/assets/icons/rank2.svg?react";
import Rank3 from "@/assets/icons/rank3.svg?react";
import { Separator } from "@/components/ui/separator";
import Message from "@/components/Message";

import { Switch } from "@/components/ui/switch";
import Chat from "@/components/Chat";
import { useEffect, useState } from "react";
import { fetchCampaign, getDonateTxData } from "@/utils/aptosClient";
import ChannelActions from "@/components/ChannelActions";
import { Campaign } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Stream from "@/assets/video/hikuso.mp4";

type LivePageProps = {
  channelInfo: any;
};

export default function LivePage({ channelInfo }: LivePageProps) {
  const queryClient = useQueryClient();
  const [campaign, setCampaign] = useState<Campaign>({
    goal: 0,
    current: 0,
    id: "",
    wallet: "",
  } as Campaign);
  const { account } = useWallet();

  const fetchData = useQuery({
    queryKey: ["campaign", channelInfo?.campaign],
    queryFn: async () => {
      if (!channelInfo?.campaign) return;
      const data = await fetchCampaign(channelInfo?.campaign!);
      setCampaign(data);
      return data;
    },
  });

  const sendDonate = async (amount) => {
    const tx = await getDonateTxData(channelInfo?.campaign!, amount);
    console.log(tx);

    await (window as any).pontem.signAndSubmit(tx);
    queryClient.invalidateQueries({
      queryKey: ["campaign", channelInfo?.campaign],
    });
    queryClient.invalidateQueries({
      queryKey: ["amount", account?.address],
    });
  };

  const fetchSubscriptionStatus = useQuery({
    queryKey: ["subscriptionStatus", channelInfo.uid],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:2424/views/viewIsActive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coinAddress: channelInfo.coinAddress,
          userAddress: account.address,
        }),
      });

      const data = await resp.json();
      console.log(data);

      if (!data || resp.status !== 200) {
        return {
          subscriptionStatus: 0,
        };
      }
      console.log(data);

      return {
        subscriptionStatus: data.isActive[0],
      };
    },
  });

  return (
    <>
      {!channelInfo.isPrivate || fetchSubscriptionStatus.data?.subscriptionStatus ? (
        <div
          className="flex gap-4 overflow-hidden"
          style={{
            maxHeight: "calc(100vh - 60px)",
          }}
        >
          <div
            className="flex-grow overflow-y-scroll"
            style={{
              height: "calc(100vh - 60px)",
              scrollbarWidth: "none",
            }}
          >
            <div className="flex flex-grow justify-between">
              <div className="relative flex-grow">
                {fetchData.isLoading && (
                  <div className="absolute w-full h-full z-10 backdrop-blur-sm flex items-center justify-center">
                    <Spinner className="w-10 h-10" />
                  </div>
                )}
                <div className="flex items-center justify-between flex-grow">
                  <div className="flex items-center gap-3">
                    <h2 className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#1814FF] to-[#F2F2F2] via-[#7E7BF9] via-[54%]">
                      {campaign?.goal - campaign?.current}
                    </h2>
                    <p className="font-[FairyMuffin] text-2xl primary">Bear-Ice-Cream left !</p>
                  </div>
                  <p className="text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-b from-[#1814FF] to-[#F2F2F2] via-[#7E7BF9] via-[54%]">
                    {`${campaign?.current}/${campaign?.goal}`}
                  </p>
                </div>
                <Progress value={Math.min(100, (campaign.current / campaign.goal) * 100)} />
              </div>
              <img src={IceCream} />
            </div>
            <div className="relative w-full aspect-video bg-[#DEDEDE] rounded-lg mb-4">
              <video
                className="inset-0 w-full h-full object-cover rounded-lg"
                src={channelInfo?.streamUrl}
                autoPlay
                muted
              ></video>
              {channelInfo.isPrivate && (
                <div className="absolute bg-[#DC2625] top-3 left-4 px-3 rounded-lg text-white font-[FairyMuffin]">
                  Private
                </div>
              )}
              <div className="absolute right-4 bottom-3">
                <Switch className="data-[state=unchecked]:bg-[#B9B9B9]" checked />
              </div>
            </div>
            <div className="flex mb-2">
              <ChannelInfo channel={{ id: "1", name: channelInfo.name, avatar: channelInfo.avatar, game: "Chating" }} />
              <ChannelActions channel={channelInfo} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl uppercase font-[FairyMuffin]">About me</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam deleniti labore. Iusto facere
                doloremque quis perferendis, maiores nesciunt, aliquam asperiores, voluptatum ut voluptate reprehenderit
                laboriosam rem harum numquam magni!
              </p>
              <div className="flex items-center gap-8 mb-4">
                <Button className="gradient-2 aspect-square w-[60px] shadow-[0_0px_10px_0px_rgba(250,156,231,1)] rounded-2xl h-[60px]">
                  <Youtube height="35px" width="35px" />
                </Button>
                <Button className="gradient-2 aspect-square w-[60px] shadow-[0_0px_10px_0px_rgba(250,156,231,1)] rounded-2xl h-[60px]">
                  <Twitter height="35px" width="35px" />
                </Button>
                <Button className="gradient-2 aspect-square w-[60px] shadow-[0_0px_10px_0px_rgba(250,156,231,1)] rounded-2xl h-[60px]">
                  <Facebook height="35px" width="35px" />
                </Button>
                <Button className="gradient-2 aspect-square w-[60px] shadow-[0_0px_10px_0px_rgba(250,156,231,1)] rounded-2xl h-[60px]">
                  <Discord height="35px" width="35px" />
                </Button>
              </div>
            </div>
          </div>
          <div className="min-w-[350px] max-h-full sticky top-[60px] flex flex-col overflow-hidden">
            <h3 className="font-[FairyMuffin] uppercase text-xl text-center">Stream chat</h3>
            <div className="flex gap-4 mb-2">
              <div className="flex items-center gap-2">
                <Rank1 height={30} width={30} />
                <p className="font-bold text-lg">Mobius</p>
              </div>
              <div className="flex items-center gap-2">
                <Rank2 height={30} width={30} />
                <p className="font-bold text-lg">Mobius</p>
              </div>
              <div className="flex items-center gap-2">
                <Rank3 height={30} width={30} />
                <p className="font-bold text-lg">Mobius</p>
              </div>
            </div>
            <Separator className="bg-[#B9B9B9]" />
            <div className="w-full overflow-auto flex-grow flex flex-col gap-2">
              {Array.from({ length: 100 }).map((_, index) => (
                <Message key={index} name="winprn" message="test" />
              ))}
            </div>
            <Chat wallet={channelInfo?.campaign} sendDonate={sendDonate} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-4xl font-[FairyMuffin]">You need to subscribe to this channel to watch this stream</p>
        </div>
      )}
    </>
  );
}
