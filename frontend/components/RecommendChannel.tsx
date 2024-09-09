import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>X</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="text-[FairyMuffin] font-bold text-lg">{channel.name}</h4>
        <p className="font-bold text-[#B9B9B9]">{channel.game}</p>
      </div>
      <div className="h-[10px] aspect-square bg-red-600 rounded-full"></div>
    </div>
  );
}
