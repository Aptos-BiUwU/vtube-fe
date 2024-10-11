import Fire from "@/assets/icons/fire.svg?react";
import Banner from "@/assets/images/banner.png";
import VideoPreview from "@/components/VideoPreview";
import { streamers } from "@/utils/db";

export default function HomePage() {
  return (
    <>
      <img src={Banner} className="mx-auto mb-8" />
      <div className="flex gap-2 items-center mb-4">
        {/* @ts-ignore */}
        <Fire width="50px" height="50px" />
        <h2 className="font-medium text-4xl font-[FairyMuffin]">Recommended anime live</h2>
      </div>
      <div className="grid grid-cols-3 flex-grow w-full">
        {streamers.map((streamer, index) => (
          <VideoPreview channel={streamer as any} key={index} />
        ))}
      </div>
    </>
  );
}
