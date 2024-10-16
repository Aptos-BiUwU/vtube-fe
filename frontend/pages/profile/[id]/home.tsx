import PreviousVideo from "@/components/PreviousVideo";
import Hand from "@/public/assets/icons/hand.svg?react";
import Grid from "@/public/assets/icons/grid.svg?react";
import Suggestion from "@/public/assets/icons/suggestion.svg?react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Collection from "@/components/Collection";
import StreamCategory from "@/components/StreamCategory";
import SectionTitle from "@/components/SectionTitle";
import SuggestStreamer from "@/components/SuggestStreamer";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { getRandomCategory, streamers, getCollections } from "@/utils/db";
import NFT from "@/public/assets/images/nft.png";
import { useState } from "react";
import { redirect } from "react-router-dom";

const header = ["Token name", "Price", "1 hour", "1 day", "FDV", "Volume"];

type HomeSectionProps = {
  name: string;
  videos: any[];
  token: any;
};

export default function HomeSection({ name, videos, token }: HomeSectionProps) {
  const [collection, setCollection] = useState(0);
  const collections = getCollections(name);

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
      <a href="/swap">
        <div className="pr-20 mb-8">
          <SectionTitle icon={<Hand />} title="Fan token" />
          <div className="w-full gradient bg-opacity-20 text-black rounded-md ml-10 cursor-pointer">
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
      </a>
      <div className="flex gap-14 mb-6">
        <Dialog>
          {collections.map((collection, index) => (
            <DialogTrigger onClick={() => setCollection(index)} className="flex gap-4">
              <Collection
                key={index}
                image={collection.image}
                name={collection.name}
                floor={collection.floor}
                volume={collection.volume}
              />
            </DialogTrigger>
          ))}
          <DialogContent className="p-0">
            <div className="pb-4 overflow-hidden w-full">
              <img src={collections[collection].image} className="mb-4 w-full object-cover" />
              <div className="px-3 flex justify-between font-[Poppins] font-light max-w-3xl">
                <div className="font-[FairyMuffin]">
                  <h2 className="text-2xl">{collections[collection].name}</h2>
                  <h3 className="primary text-xl">{name}</h3>
                </div>
                <div>
                  <p className="text-lg">Total volume</p>
                  <p className="text-lg font-bold">{collections[collection].volume} APT</p>
                </div>
                <div>
                  <p className="text-lg">Floor</p>
                  <p className="text-lg font-bold">{collections[collection].floor} APT</p>
                </div>
                <div>
                  <p className="text-lg">Best offer</p>
                  <p className="text-lg font-bold">{collections[collection].bestOffer} APT</p>
                </div>
                <div>
                  <p className="text-lg">Listed</p>
                  <p className="text-lg font-bold">{collections[collection].listed}</p>
                </div>
                <div>
                  <p className="text-lg">Owner (unique)</p>
                  <p className="text-lg font-bold">{collections[collection].owner}</p>
                </div>
              </div>
              <div className="px-3 font-[FairyMuffin] flex flex-col gap-4">
                <h3 className="text-lg">Items</h3>
                <div className="w-full overflow-auto">
                  <div className="flex gap-4 w-fit">
                    {collections[collection].items.map((item, index) => (
                      <>
                        <Collection
                          key={index}
                          image={item.image}
                          name={item.name}
                          floor={item.floor}
                          volume={item.volume}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mb-4">
        <SectionTitle icon={<Grid />} title="Recently streamed categories" />
        <div className="flex gap-2">
          {Array.from(getRandomCategory()).map((category, index) => (
            <StreamCategory key={index} name={(category as any).name} image={(category as any).image} />
          ))}
        </div>
      </div>
      <div>
        <SectionTitle icon={<Suggestion />} title="Suggested streamers" />
        <div className="flex gap-6">
          {streamers.map((streamer, index) => (
            <SuggestStreamer key={index} img={streamer.avatar} name={streamer.name} />
          ))}
        </div>
      </div>
    </>
  );
}
