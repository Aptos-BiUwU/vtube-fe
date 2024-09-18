import ChannelInfo from "@/components/ChannelInfo";
import Banner from "@/assets/images/banner.png";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import PreviousVideo from "@/components/PreviousVideo";
import Hand from "@/assets/icons/hand.svg?react";
import Grid from "@/assets/icons/grid.svg?react";
import Suggestion from "@/assets/icons/suggestion.svg?react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Collection from "@/components/Collection";
import StreamCategory from "@/components/StreamCategory";
import SectionTitle from "@/components/SectionTitle";
import SuggestStreamer from "@/components/SuggestStreamer";

const header = ["Token name", "Price", "1 hour", "1 day", "FDV", "Volume"];

export default function ProfilePage() {
  return (
    <div className="overflow-y-scroll overflow-x-visible pl-2" style={{ height: "calc(100vh - 60px)" }}>
      <div
        className="flex flex-col overflow-y-visible mb-6"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="pr-20">
          <img src={Banner} className="mx-auto mb-8" />
          <div className="flex mb-8">
            <ChannelInfo channel={{ id: "1", name: "Shad", avatar: "", game: "League of Legends", level: 10 }} />
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
        </div>
        <div className="flex items-center mb-8">
          <div className="rounded-full gradient-2 p-1">
            <Button variant="outline" className="rounded-full text-lg">
              <span className="primary font-bold font-[FairyMuffin] text-xl">Home</span>
            </Button>
          </div>
          <Button variant="ghost" className="font-bold font-[FairyMuffin] text-lg rounded-full">
            Videos
          </Button>
          <Button variant="ghost" className="font-bold font-[FairyMuffin] text-lg rounded-full">
            About
          </Button>
        </div>
        <div
          className="flex w-full gap-4 overflow-x-auto overflow-y-visible"
          style={{
            minHeight: "fit-content",
            scrollbarWidth: "none",
          }}
        >
          <PreviousVideo />
          <PreviousVideo />
          <PreviousVideo />
          <PreviousVideo />
          <PreviousVideo />
        </div>
      </div>
      <div className="pr-20 mb-8">
        <SectionTitle icon={<Hand />} title="Fan token" />
        <div className="w-full gradient bg-opacity-20 text-black rounded-md ml-10">
          <Table>
            <TableHeader className="border-b-0">
              <TableRow className="!border-b-0 !font-[FairyMuffin] !font-bold !text-lg !text-[#B1B1B1]">
                {header.map((item, index) => (
                  <TableCell key={index}>
                    {item.split(" ").map((word, index) => {
                      const className = Number.isInteger(Number(word)) ? "font-[Poppins]" : "";
                      return (
                        <span key={index} className={className}>
                          {word}{" "}
                        </span>
                      );
                    })}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="border-t-0">
              <TableRow className="!border-t-0 !text-lg !font-bold !font-[Poppins]">
                <TableCell>
                  Ethereum <span className="text-gray-400">ETH</span>
                </TableCell>
                <TableCell>$2,425</TableCell>
                <TableCell>0.2%</TableCell>
                <TableCell>0.2%</TableCell>
                <TableCell>$6,5B</TableCell>
                <TableCell>$700,5M</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex gap-14 mb-6">
        <Collection name="Portrade" floor="0.04" volume="2,133" />
        <Collection name="Portrade" floor="0.04" volume="2,133" />
      </div>
      <div className="mb-4">
        <SectionTitle icon={<Grid />} title="Recently streamed categories" />
        <div className="flex">
          <StreamCategory name="5 toubun no hanaalegjlkeaawaw" />
        </div>
      </div>
      <div>
        <SectionTitle icon={<Suggestion />} title="Suggested streamers" />
        <div className="flex gap-6">
          <SuggestStreamer name="HCMUS" />
          <SuggestStreamer name="HCMUS" />
          <SuggestStreamer name="HCMUS" />
          <SuggestStreamer name="HCMUS" />
          <SuggestStreamer name="HCMUS" />
          <SuggestStreamer name="HCMUS" />
        </div>
      </div>
    </div>
  );
}
