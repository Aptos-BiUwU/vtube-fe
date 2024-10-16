import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Swap from "@/public/assets/icons/swap.svg?react";
import { useState } from "react";
import { tokens } from "@/utils/db";
import { Input } from "@/components/ui/input";
import { getSwapTxData } from "@/utils/aptosClient";

export default function SwapTokenPage() {
  const [sellValue, setSellValue] = useState(0);
  const [sellToken, setSellToken] = useState("BUU");
  const [buyValue, setBuyValue] = useState(0);
  const [buyToken, setBuyToken] = useState("BUU");

  const swap = async () => {
    const tx = await getSwapTxData(sellToken, buyToken, sellValue, true);
    await (window as any).aptos.signAndSubmitTransaction(tx);
  };

  return (
    <>
      <div className="flex flex-col items-center w-1/3 gap-4 mx-auto">
        <Token type="Sell" setValue={setSellValue} value={sellValue} setToken={setSellToken} />
        <Button variant="ghost" className="py-8">
          <Swap fontSize={50} />
        </Button>
        <Token type="Buy" setValue={setBuyValue} value={buyValue} setToken={setBuyToken} />
        <Button
          onClick={swap}
          className="w-full gradient bg-opacity-30 bg-transparent font-[FairyMuffin] text-2xl text-black hover:bg-transparent hover:bg-opacity-50"
        >
          <span className="primary">Swap</span>
        </Button>
      </div>
    </>
  );
}

function Token({ type, setValue, value, setToken }) {
  return (
    <div className="w-full flex gap-4 justify-between items-center bg-[#EEEEEE] p-4 rounded-lg font-[FairyMuffin]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[#A0A0A0] text-2xl">{type}</h3>
        <Input
          defaultValue={value}
          type="number"
          className="font-[Poppins] text-6xl font-semibold border-none p-0 h-fit bg-transparent"
          style={{
            WebkitAppearance: "none",
          }}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Select
        onValueChange={(val) => {
          console.log(val);
          setToken(val);
        }}
      >
        <SelectTrigger className="w-[180px] bg-[#D9D9D9] rounded-full text-2xl flex gap-2">
          <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
          <SelectValue placeholder="BUU" />
        </SelectTrigger>
        <SelectContent>
          {tokens.map((token, index) => (
            <SelectItem key={index} value={token.address} className="text-2xl">
              {token.symbol}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
