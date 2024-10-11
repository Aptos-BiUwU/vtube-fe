import ChannelInfo from "@/components/ChannelInfo";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import Rank1 from "@/assets/icons/rank1.svg?react";
import Rank2 from "@/assets/icons/rank2.svg?react";
import Rank3 from "@/assets/icons/rank3.svg?react";
import Key from "@/assets/icons/key.png";
import { getBattleTxData } from "@/utils/aptosClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { streamers } from "@/utils/db";
import { cn } from "@/lib/utils";

type BattlePageProps = {
  streamer: any;
};

export default function BattlePage({ streamer }: BattlePageProps) {
  const [side, setSide] = useState(false);
  const [percent, setPercent] = useState(50);
  const [channels, setChannels] = useState([]);
  const queryClient = useQueryClient();
  const attack = async (amount: string) => {
    const tx = await getBattleTxData(streamer.battleId, amount, side);
    console.log(tx);
    await window.pontem.signAndSubmit(tx);
    queryClient.invalidateQueries({
      queryKey: ["battle", streamer.battleId],
    });
  };

  const getBattle = useQuery({
    queryKey: ["battle", streamer.battleId],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:2424/views/viewBattleInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          battleId: streamer.battleId,
        }),
      });

      const data = await resp.json();
      if (!data) {
        return null;
      }
      console.log(data);

      const leftStreamer = streamers.find((streamer) => streamer.coinAddress === data[0]);
      const rightStreamer = streamers.find((streamer) => streamer.coinAddress === data[1]);
      setChannels([leftStreamer, rightStreamer]);
      console.log(leftStreamer, rightStreamer);

      if (data[0] === streamer.coinAddress) {
        setSide(false);
      } else {
        setSide(true);
      }
      const left = Number(data[2]);
      const right = Number(data[3]);
      const total = left + right;
      setPercent((left / total) * 100);
      return {
        left,
        right,
      };
    },
  });

  return (
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
        <div className="mb-4">
          <div className="flex justify-between font-[Cubano] text-4xl">
            <p className="primary-2">{getBattle.data?.left}</p>
            <p className="primary-3">{getBattle.data?.right}</p>
          </div>
          <div className="relative">
            <img
              style={{
                filter: "drop-shadow(0px 0px 10px rgba(255, 247, 67, 0.55))",
                left: `${percent}%`,
              }}
              className={cn(
                `absolute z-[999] top-1/2 -translate-x-1/2 -translate-y-1/2 h-12`,
                percent < 50 ? "rotate-180" : "",
              )}
              src={Key}
            />
            <Progress
              className="bg-gradient-to-r from-[#6776FF] to-[#A6A4FF] to-[56%] via-[100%] via-[#D3D4FF]"
              indiClass="bg-gradient-to-r from-[#FF7AE4] to-[#FDA4FF] to-[56%] via-[100%] via-[#F1D3FF]"
              value={percent}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full aspect-video bg-[#DEDEDE] rounded-lg mb-4">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              src={channels[0]?.streamUrl}
              autoPlay
              muted
            ></video>
          </div>
          <div className="relative w-full aspect-video bg-[#DEDEDE] rounded-lg mb-4">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              src={channels[1]?.streamUrl}
              autoPlay
              muted
            ></video>
          </div>
        </div>
        <div className="flex mb-2 justify-between">
          {!getBattle.isLoading && (
            <>
              <ChannelInfo channel={channels[0]} />
              <ChannelInfo reverse channel={channels[1]} />
            </>
          )}
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
        <Chat wallet="" sendDonate={attack} />
      </div>
    </div>
  );
}
