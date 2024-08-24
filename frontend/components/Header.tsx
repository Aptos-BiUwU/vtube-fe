// import Builzing font from google fonts

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex items-center justify-between py-2 mx-auto w-full gap-6">
      <h1 className="text-6xl font-['Bulzing'] primary">VTUBER</h1>
      <Input
        placeholder="Search"
        className="placeholder:font-[AlienWorld] text-white text-2xl bg-[#361957] border-none focus:border-none focus:ring-[#361957]"
      />
      <div className="rounded-full p-[3px] gradient">
        <Button className="rounded-full font-[AlienWorld] text-xl px-10 py-0 bg-[#0E0220] tracking-wide">LOGIN</Button>
      </div>
      <Button className="uppercase font-[AlienWorld] text-xl bg-transparent">
        <span className="primary">Sign Up</span>
      </Button>
    </div>
  );
}
