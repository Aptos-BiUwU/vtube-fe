import IceCream from "@/assets/images/icecream.png";
import ChannelInfo from "@/components/ChannelInfo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Facebook, Gift, Heart, Laugh, SendHorizonal, Twitter } from "lucide-react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Discord from "@/assets/icons/discord.svg?react";
import Rank1 from "@/assets/icons/rank1.svg?react";
import Rank2 from "@/assets/icons/rank2.svg?react";
import Rank3 from "@/assets/icons/rank3.svg?react";
import { Separator } from "@/components/ui/separator";
import Message from "@/components/Message";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function LivestreamPage() {
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
        <div className="flex flex-grow justify-between">
          <div className="flex-grow">
            <div className="flex items-center justify-between flex-grow">
              <div className="flex items-center gap-3">
                <h2 className="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#1814FF] to-[#F2F2F2] via-[#7E7BF9] via-[54%]">
                  12
                </h2>
                <p className="font-[FairyMuffin] text-2xl primary">Bear-Ice-Cream left !</p>
              </div>
              <p className="text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-b from-[#1814FF] to-[#F2F2F2] via-[#7E7BF9] via-[54%]">
                11/23
              </p>
            </div>
            <Progress value={50} />
          </div>
          <img src={IceCream} />
        </div>
        <div className="relative w-full aspect-video bg-[#DEDEDE] rounded-lg mb-4">
          <div className="absolute right-2 bottom-3">
            <Switch className="data-[state=unchecked]:bg-[#B9B9B9]" />
          </div>
        </div>
        <div className="flex mb-2">
          <ChannelInfo channel={{ id: "1", name: "Shad", avatar: "", game: "League of Legends" }} />
          <div className="flex gap-4 items-center font-[FairyMuffin]">
            <div className="rounded-md gradient-2 p-0.5">
              <Button variant="outline" className="rounded-sm text-lg">
                Join
              </Button>
            </div>
            <div className="rounded-md gradient-2 p-0.5">
              <Button variant="outline" className="text-lg rounded-sm flex items-center">
                <Heart size={20} />
                Subcribe
              </Button>
            </div>
          </div>
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
        <div className="mb-4 mx-2 pt-4 min-h-fit mt-auto">
          <div className="relative">
            <Input
              placeholder="Send message..."
              className="mb-2 pr-32 rounded-lg text-lg placeholder:font-[FairyMuffin] placeholder:text-[#B9B9B9] border-4 py-6 border-[#FFF2FC] shadow-[0_0px_10px_0px_rgba(250,156,231,1)]"
            />
            <Button className="absolute right-0 top-[50%] transform translate-y-[-50%]" variant="ghost">
              <SendHorizonal size={30} />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Gift size={30} />
              <Button variant="ghost" className="rounded-lg text-xl font-[FairyMuffin]">
                Send gift
              </Button>
            </div>
            <Button variant="ghost" className="p-0">
              <Laugh size={30} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
