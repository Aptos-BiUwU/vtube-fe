import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type ChannelInfoProps = {
  channel: {
    id: string;
    name: string;
    avatar: string;
    game: string;
    level?: number;
  };
  reverse?: boolean;
};

export default function ChannelInfo({ channel, reverse }: ChannelInfoProps) {
  return (
    <div className={cn("flex items-center w-full gap-2", reverse ? "flex-row-reverse" : "")}>
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src={channel?.avatar || "https://github.com/shadcn.png"} />
        <AvatarFallback>X</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center gap-4">
          <a href={`/profile/${channel.uid}`}>
            <h4 className={cn("font-[FairyMuffin] font-bold text-s", reverse ? "ml-auto" : "")}>{channel.name}</h4>
          </a>
          {channel.level && (
            <span className="py-[0.5px] font-bold px-3 gradient rounded-full glow">lv. {channel.level}</span>
          )}
        </div>
        <p className="font-bold text-[#B9B9B9]">{channel.game}</p>
      </div>
    </div>
  );
}
