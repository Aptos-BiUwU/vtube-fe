import { cn } from "@/lib/utils";
import CollectionImage from "@/public/assets/images/collection.png";
import { Button } from "./ui/button";
import { NFT_WALLET } from "@/utils/db";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

type CollectionProps = {
  name: string;
  sc_name?: string;
  id?: string;
  floor: string;
  volume: string;
  image: string;
  small?: boolean;
};

export default function Collection({ name, id, sc_name, floor, volume, image, small }: CollectionProps) {
  const { account } = useWallet();

  const fetchNFTInfo = async () => {};

  const onClick = async () => {
    const payload = {
      function: `${NFT_WALLET}::digital_asset::transfer_token`,
      arguments: [sc_name, id],
      type_arguments: [],
    };

    console.log(payload);

    await (window as any).aptos.signAndSubmitTransaction({ payload });
  };

  return (
    <div
      className={cn(
        "flex flex-col overflow-auto justify-between glow rounded-lg w-[300px] min-h-full font-[FairyMuffin] text-left",
        small ? "p-3 mb-2" : "",
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
            <p className="text-lg font-light">Price</p>
            <p className="font-bold text-xl">{floor} APT</p>
          </div>
          <div>
            <p className="text-lg font-light">Total volume</p>
            <p className="font-bold text-xl">{volume} APT</p>
          </div>
        </div>
      </div>
      {small && (
        <Button className="gradient-2 text-lg text-black" onClick={onClick}>
          Buy now
        </Button>
      )}
    </div>
  );
}
