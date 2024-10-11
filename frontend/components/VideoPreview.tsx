import ChannelInfo from "./ChannelInfo";

type VideoPreviewProps = {
  channel: {
    id: string;
    name: string;
    avatar: string;
    game: string;
    thumbnailUrl: string;
    uid: string;
  };
};

export default function VideoPreview({ channel }: VideoPreviewProps) {
  return (
    <a href={`/live/${channel.uid}`} className="w-3/4 flex flex-col gap-3">
      <div className="relative w-full bg-[#D9D9D9] aspect-video rounded-lg">
        <img src={channel.thumbnailUrl} className="w-full aspect-video object-cover rounded-lg" />
        <div className="absolute left-2 top-2 bg-[#FF0000] text-white font-[FairyMuffin] px-3 rounded-lg">Live</div>
      </div>
      <ChannelInfo channel={channel} />
    </a>
  );
}
