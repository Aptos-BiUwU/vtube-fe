// import Builzing font from google fonts

import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between py-2 px-4 mx-auto w-full gap-6">
      <h1 className="text-5xl font-['FranxurterTotally'] primary">BiUwU</h1>
      <div>
        <Button className="rounded-full font-[FairyMuffin] text-xl gradient tracking-wide text-black">Sign in</Button>
        <Button className="font-[FairyMuffin] text-xl bg-transparent">
          <span className="primary">Sign Up</span>
        </Button>
      </div>
    </div>
  );
}
