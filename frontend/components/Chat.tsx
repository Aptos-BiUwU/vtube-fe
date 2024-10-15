import { GiftIcon, Laugh, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Gift from "./Gift";
import GiftStar from "@/public/assets/icons/gift_star.png";
import GiftMeow from "@/public/assets/icons/gift_meow.png";
import GiftGhost from "@/public/assets/icons/gift_ghost.png";
import GiftJdok from "@/public/assets/icons/gift_jdok.png";
import { useState } from "react";

type ChatProps = {
  wallet?: string;
  sendDonate?: {
    (amount: string): void;
    (amount: string, side: string): void;
  };
  sendChat?: (message: string) => void;
};

const gifts = [
  {
    icon: GiftStar,
    price: "100",
    name: "Star",
  },
  {
    icon: GiftGhost,
    price: "200",
    name: "Magic Bear",
  },
  {
    icon: GiftJdok,
    price: "300",
    name: "Jdok",
  },
  {
    icon: GiftMeow,
    price: "400",
    name: "Super Meow",
  },
];

export default function Chat({ sendDonate, sendChat }: ChatProps) {
  const [message, setMessage] = useState("");

  return (
    <div className="mb-4 mx-2 pt-4 min-h-fit mt-auto">
      <div className="relative">
        <Input
          placeholder="Send message..."
          className="mb-2 pr-32 rounded-lg text-lg placeholder:font-[FairyMuffin] placeholder:text-[#B9B9B9] border-4 py-6 border-[#FFF2FC] shadow-[0_0px_10px_0px_rgba(250,156,231,1)]"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button
          onClick={() => {
            sendChat(message);
            setMessage("");
          }}
          className="absolute right-0 top-[50%] transform translate-y-[-50%]"
          variant="ghost"
        >
          <SendHorizonal size={30} />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" className="rounded-lg text-xl font-[FairyMuffin] p-0">
                <GiftIcon size={30} />
                Send gift
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="grid grid-cols-3 gap-4 p-2 bg-[#FFF2FC]"
              style={{
                boxShadow: "0px 0px 10px #FF7AE4",
              }}
            >
              {gifts.map((gift) => {
                return <Gift name={gift.name} icon={gift.icon} price={gift.price} onClick={sendDonate} />;
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button variant="ghost" className="p-0">
          <Laugh size={30} />
        </Button>
      </div>
    </div>
  );
}
