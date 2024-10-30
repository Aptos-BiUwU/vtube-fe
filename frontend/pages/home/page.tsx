import Fire from "@/public/assets/icons/fire.svg?react";
import Banner from "@/public/assets/images/banner.png";
import VideoPreview from "@/components/VideoPreview";
import { streamers } from "@/utils/db";

export default function HomePage() {
  return (
    <div
      className="overflow-scroll pb-4"
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      <img src={Banner} className="mx-auto mb-8" />
      <div className="flex gap-2 items-center mb-4">
        {/* @ts-ignore */}
        <Fire width="50px" height="50px" />
        <h2 className="font-medium text-4xl font-[FairyMuffin]">Recommended anime live</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center mb-2">
          <img
            src="https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg"
            className="w-[50px] rounded-full aspect-square"
          />
          <h3 className="font-[FairyMuffin] text-3xl primary">One Piece Team!</h3>
        </div>
        <div className="grid grid-cols-3 flex-grow w-full gap-y-4">
          {streamers.slice(0, 5).map((streamer, index) => (
            <VideoPreview channel={streamer as any} key={index} />
          ))}
        </div>
        <div className="flex gap-3 items-center mb-2">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/0c9ce4e037546965d6b1f3807e9f8f549a113d32066b2bdb22ada5d179c0d89a.jpg"
            className="w-[50px] rounded-full aspect-square"
          />
          <h3 className="font-[FairyMuffin] text-3xl primary">Naruto Team!</h3>
        </div>
        <div className="grid grid-cols-3 flex-grow w-full gap-y-4">
          {streamers.slice(5, 12).map((streamer, index) => (
            <VideoPreview channel={streamer as any} key={index} />
          ))}
        </div>
        <div className="flex gap-3 items-center mb-2">
          <img
            src="https://m.media-amazon.com/images/I/81Xoz+ob08L.jpg"
            className="w-[50px] rounded-full aspect-square"
          />
          <h3 className="font-[FairyMuffin] text-3xl primary">Other</h3>
        </div>
        <div className="grid grid-cols-3 flex-grow w-full gap-y-4">
          {streamers.slice(12).map((streamer, index) => (
            <VideoPreview channel={streamer as any} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
