import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

type GiftProps = {
  icon: string;
  price: string;
  name: string;
  onClick: (price: string) => void;
};

export default function Gift({ icon, price, name, onClick }: GiftProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <div className="h-full flex flex-col">
            <h4 className="text-lg text-center text-[#A0A0A0] font-[FairyMuffin]">{name}</h4>
            <img
              src={icon}
              role="button"
              className="w-24 mx-auto grow object-contain"
              onClick={() => {
                onClick(price);
              }}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-[Poppins]">{price}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
