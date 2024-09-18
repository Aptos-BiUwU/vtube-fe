import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type ChannelInfoProps = {
  channel: {
    id: string;
    name: string;
    avatar: string;
    game: string;
    level?: number;
  };
};

export default function ChannelInfo({ channel }: ChannelInfoProps) {
  return (
    <div className="flex items-center w-full gap-2">
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>X</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center gap-4">
          <h4 className="font-[FairyMuffin] font-bold text-s">{channel.name}</h4>
          {channel.level && (
            <span className="py-[0.5px] font-bold px-3 gradient rounded-full glow">lv. {channel.level}</span>
          )}
        </div>
        <p className="font-bold text-[#B9B9B9]">{channel.game}</p>
      </div>
    </div>
  );
}
