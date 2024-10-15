import Avatar from "@/assets/images/avatar.png";

type PreviousVideoProps = {
  thumbnail: string;
  duration: string;
  views: string;
  time: string;
  name: string;
};

export default function PreviousVideo({ thumbnail, name, duration, views, time }: PreviousVideoProps) {
  return (
    <div className="w-full rounded-lg min-w-[400px] min-h-fit overflow-visible flex flex-col gap-2 mb-4">
      <div className="bg-[#D9D9D9] relative w-full aspect-video rounded-lg overflow-hidden">
        <img src={thumbnail} className="object-cover w-full" />
        <div className="absolute top-2 left-2 bg-[#F1D3FF] p-2 rounded-lg">{duration}</div>
        <div className="absolute bottom-2 left-2 bg-[#F1D3FF] p-2 rounded-lg">{views} views</div>
        <div className="absolute bottom-2 right-2 bg-[#F1D3FF] p-2 rounded-lg">{time}</div>
      </div>
      <h2 className="font-[FairyMuffin] text-2xl">
        {name.split("").map((letter, index) => (
          <span key={index} className={letter > "0" && letter < "9" ? "font-[Poppins] font-bold" : ""}>
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
}
