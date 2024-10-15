import { Check, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import BiuwuCoin from "@/public/assets/icons/biuwu_coin.svg?react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDepositTxData, getSubcriptionTxData } from "@/utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

type ChannelActionsProps = {
  channel: any;
};

export default function ChannelActions({ channel }: ChannelActionsProps) {
  const { account } = useWallet();

  const fetchSubscriptionPlan = useQuery({
    queryKey: ["subscription", channel.id],
    queryFn: async () => {
      const resp = await fetch(`http://140.245.117.232:2424/views/viewSubscriptionPlanInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coinAddress: channel.coinAddress,
        }),
      });

      const data = await resp.json();

      if (!data || resp.status !== 200) {
        return {
          subscriptionPlanInfo: [[[0, 0]]],
        };
      }
      return data;
    },
  });

  const fetchSubscriptionStatus = useQuery({
    queryKey: ["subscriptionStatus", channel.id],
    queryFn: async () => {
      const resp = await fetch(`http://140.245.117.232:2424/views/viewIsActive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coinAddress: channel.coinAddress,
          userAddress: account.address,
        }),
      });

      const data = await resp.json();

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

  const subcribe = async () => {
    let tx = await getSubcriptionTxData(channel.coinAddress);
    await (window as any).pontem.signAndSubmit(tx);

    tx = await getDepositTxData(channel.coinAddress, 100);
    await (window as any).pontem.signAndSubmit(tx);

    fetchSubscriptionStatus.refetch();
  };

  return (
    <div className="flex gap-4 items-center font-[FairyMuffin]">
      <Dialog>
        <DialogTrigger asChild>
          <div className="rounded-md gradient-2 p-0.5">
            <Button variant="outline" className="rounded-sm text-lg">
              {fetchSubscriptionStatus.data?.subscriptionStatus ? "Joined" : "Join"}
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Join the channel</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <BiuwuCoin fontSize={35} />
            <p className="font-[Poppins] texl-2xl">
              <span className="text-4xl font-bold">{fetchSubscriptionPlan.data?.subscriptionPlanInfo[0][1]}</span> per
              month
            </p>
          </div>
          <ul>
            <li className="flex">
              <Check color="green" />
              Member perks
            </li>
            <li className="flex">
              <Check color="green" />
              Exclusive content
            </li>
          </ul>
          <DialogClose>
            <Button
              onClick={() => {
                subcribe();
              }}
            >
              Join now!
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <div className="rounded-md gradient-2 p-0.5">
        <Button variant="outline" className="text-lg rounded-sm flex items-center">
          <Heart size={20} />
          Subcribe
        </Button>
      </div>
    </div>
  );
}
