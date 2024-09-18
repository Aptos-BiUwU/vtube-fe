import CollectionImage from "@/assets/images/collection.png";

type CollectionProps = {
  name: string;
  floor: string;
  volume: string;
};

export default function Collection({ name, floor, volume }: CollectionProps) {
  return (
    <div className="glow rounded-lg font-[FairyMuffin]">
      <img src={CollectionImage} />
      <div className="p-4">
        <h3 className="text-2xl">{name}</h3>
        <div className="flex items-center justify-between font-[Poppins]">
          <div>
            <p className="text-lg font-light">Floor</p>
            <p className="font-bold text-xl">{floor} ETH</p>
          </div>
          <div>
            <p className="text-lg font-light">Total volume</p>
            <p className="font-bold text-xl">{volume} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
