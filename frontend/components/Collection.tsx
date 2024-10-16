import { cn } from "@/lib/utils";
import CollectionImage from "@/public/assets/images/collection.png";

type CollectionProps = {
  name: string;
  floor: string;
  volume: string;
  image: string;
  small?: boolean;
};

export default function Collection({ name, floor, volume, image, small }: CollectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-auto justify-between glow rounded-lg w-[300px] min-h-full font-[FairyMuffin] text-left",
      )}
    >
      <img src={image} className="object-cover object-left grow" />
      <div className="p-4">
        <h3 className="text-2xl">
          {name.split("").map((letter, index) => (
            <span key={index} className={letter > "0" && letter < "9" ? "font-[Poppins] font-bold" : ""}>
              {letter}
            </span>
          ))}
        </h3>
        <div className="flex items-center justify-between font-[Poppins]">
          <div>
            <p className="text-lg font-light">Floor</p>
            <p className="font-bold text-xl">{floor} APT</p>
          </div>
          <div>
            <p className="text-lg font-light">Total volume</p>
            <p className="font-bold text-xl">{volume} APT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
