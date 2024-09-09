import ChannelInfo from "./ChannelInfo";

type VideoPreviewProps = {
  channel: {
    id: string;
    name: string;
    avatar: string;
    game: string;
  };
};

export default function VideoPreview({ channel }: VideoPreviewProps) {
  return (
    <div className="w-3/4 flex flex-col gap-3">
      <div className="relative w-full bg-[#D9D9D9] aspect-video rounded-lg">
        <div className="absolute left-2 top-2 bg-[#FF0000] text-white font-[FairyMuffin] px-3 rounded-lg">Live</div>
      </div>
      <ChannelInfo channel={channel} />
    </div>
  );
}
