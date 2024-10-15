import PreviousVideo from "@/components/PreviousVideo";
import Hand from "@/public/assets/icons/hand.svg?react";
import Grid from "@/public/assets/icons/grid.svg?react";
import Suggestion from "@/public/assets/icons/suggestion.svg?react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Collection from "@/components/Collection";
import StreamCategory from "@/components/StreamCategory";
import SectionTitle from "@/components/SectionTitle";
import SuggestStreamer from "@/components/SuggestStreamer";

const header = ["Token name", "Price", "1 hour", "1 day", "FDV", "Volume"];

type HomeSectionProps = {
  videos: any[];
  token: any;
};

export default function HomeSection({ videos, token }: HomeSectionProps) {
  return (
    <>
      <div
        className="flex w-full gap-4 overflow-x-auto overflow-y-visible"
        style={{
          minHeight: "fit-content",
          scrollbarWidth: "none",
        }}
      >
        {videos.map((video, index) => (
          <PreviousVideo
            key={index}
            thumbnail={video.thumbnail}
            name={video.name}
            duration={video.duration}
            views={video.views}
            time={video.time}
          />
        ))}
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
                  {token.name} <span className="text-gray-400">{token.symbol}</span>
                </TableCell>
                <TableCell>{token.price}</TableCell>
                <TableCell className={token.hour < "0" ? "text-red-500" : "text-green-500"}>{token.hour}%</TableCell>
                <TableCell className={token.day < "0" ? "text-red-500" : "text-green-500"}>{token.day}%</TableCell>
                <TableCell>{token.fdv}</TableCell>
                <TableCell>{token.volume}</TableCell>
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
    </>
  );
}
