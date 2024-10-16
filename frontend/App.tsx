import { Header } from "@/components/Header";
import { RecommendChannel } from "./components/RecommendChannel";
import { Button } from "./components/ui/button";
import DiamondPlus from "@/public/assets/icons/diamond_plus.svg?react";
import Inventory from "@/public/assets/icons/inventory.svg?react";
import Twitter from "@/public/assets/icons/twitter.svg?react";
import Docs from "@/public/assets/icons/document.svg?react";
import Ranking from "@/public/assets/icons/ranking.svg?react";
import Swap from "@/public/assets/icons/swap.svg?react";
import React from "react";
import { Outlet } from "react-router-dom";
import { streamers } from "./utils/db";

console.log(Inventory);

const channel = {
  id: "1",
  name: "Shad",
  avatar: "",
  game: "League of Legends",
};

const actions = [
  {
    icon: <Swap />,
    label: "Swap",
    link: "/swap",
  },
  {
    icon: <Ranking />,
    label: "Leaderboard",
    link: "/leaderboard",
  },
  {
    icon: <DiamondPlus />,
    label: "Create",
  },
  {
    icon: <Inventory />,
    label: "Inventory",
  },
  {
    icon: <Twitter />,
    label: "Twitter",
    link: "https://x.com/biuwulive",
  },
  {
    icon: <Docs />,
    label: "Docs",
    link: "https://biuwu.gitbook.io/biuwu-docs",
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header />
      <main className="flex flex-grow overflow-hidden">
        <section className="flex flex-col min-h-full gap-4 min-w-[300px] px-4 justify-between mb-6">
          <div className="w-full">
            <h3 className="uppercase text-lg font-bold text-[FairyMuffin] mb-2">Recommended channels</h3>
            <div className="flex flex-col gap-3">
              {streamers.map((streamer, index) => (
                <RecommendChannel key={index} channel={streamer as any} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {actions.map((action, index) => (
              <div key={index} className="flex items-center text-2xl font-[FairyMuffin]">
                {React.cloneElement(action.icon, { width: "32px", height: "32px" })}
                <Button variant="link">
                  <a href={action.link} className="text-xl">
                    {action.label}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="h-full overflow-hidden flex-grow">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default App;
