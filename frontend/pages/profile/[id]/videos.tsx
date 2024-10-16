import PreviousVideo from "@/components/PreviousVideo";

type VideosSectionProps = {
  videos: any[];
};

export default function VideosSection({ videos }: VideosSectionProps) {
  return (
    <>
      <div className="flex items-end gap-4 font-[FairyMuffin] mb-4">
        <h3 className="text-2xl">Recent broadcasts</h3>
        <a className="primary text-xl">view all {">"}</a>
      </div>
      <div
        className="flex w-full gap-4 overflow-x-auto overflow-y-visible mb-4"
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
      <div className="flex items-end gap-4 font-[FairyMuffin] mb-4">
        <h3 className="text-2xl">All broadcasts</h3>
        <a className="primary text-xl">view all {">"}</a>
      </div>
      <div
        className="flex w-full gap-4 overflow-x-auto overflow-y-visible mb-4"
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
    </>
  );
}
