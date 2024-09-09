import IceCream from "@/assets/images/icecream.png";
import ChannelInfo from "@/components/ChannelInfo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Facebook, Heart, Twitter } from "lucide-react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Discord from "@/assets/icons/discord.svg?react";

export default function LivestreamPage() {
  return (
    <div className="flex">
      <div className="flex-grow">
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
        <div className="w-full aspect-video bg-[#DEDEDE] rounded-lg mb-4"></div>
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
      <div className="min-w-[300px] h-full">CHAT</div>
    </div>
  );
}
