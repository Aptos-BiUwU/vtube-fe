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
          <>
            <h4 className="text-lg text-[#A0A0A0] font-[FairyMuffin]">{name}</h4>
            <Button
              onClick={() => {
                onClick(price);
              }}
              variant="ghost"
              className="p-1 h-fit"
            >
              <img src={icon} className="w-20 aspect-square" />
            </Button>
          </>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-[Poppins]">{price}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
