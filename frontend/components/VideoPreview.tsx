import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type VideoPreviewProps = {
  channel: {
    id: string;
    name: string;
    avatar: string;
    game: string;
  };
};

export default function VideoPreview({ channel }) {
  return (
    <div className="w-3/4 flex flex-col gap-3">
      <div className="relative w-full bg-[#D9D9D9] aspect-video rounded-lg">
        <div className="absolute left-2 top-2 bg-[#FF0000] text-white font-[FairyMuffin] px-3 rounded-lg">Live</div>
      </div>
      <div className="flex items-center w-full gap-2">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-[FairyMuffin] font-bold text-lg">{channel.name}</h4>
          <p className="font-bold text-[#B9B9B9]">{channel.game}</p>
        </div>
      </div>
    </div>
  );
}
