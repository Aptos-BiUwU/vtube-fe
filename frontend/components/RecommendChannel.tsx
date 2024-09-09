import ChannelInfo from "./ChannelInfo";

type RecommendChannelProps = {
  channel: {
    id: string;
    name: string;
    avatar: string;
    game: string;
  };
};

export function RecommendChannel({ channel }: RecommendChannelProps) {
  return (
    <div className="flex items-center w-full justify-between">
      <ChannelInfo channel={channel} />
      <div className="h-[10px] aspect-square bg-red-600 rounded-full"></div>
    </div>
  );
}
