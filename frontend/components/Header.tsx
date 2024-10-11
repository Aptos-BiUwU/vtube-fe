// import Builzing font from google fonts

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "./ui/button";
import { WalletSelector } from "./WalletSelector";

export function Header() {
  const wallet = useWallet();

  return (
    <div className="sticky top-0 flex items-center justify-between py-2 px-4 mx-auto w-full gap-6">
      <h1 className="text-5xl font-['FranxurterTotally'] primary">
        <a href="/">BiUwU</a>
      </h1>
      <div>
        <WalletSelector />
        {wallet.connected ? (
          <></>
        ) : (
          <Button className="font-[FairyMuffin] text-xl bg-transparent">
            <span className="primary">Sign Up</span>
          </Button>
        )}
      </div>
    </div>
  );
}
