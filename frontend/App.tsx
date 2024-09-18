import { Header } from "@/components/Header";
import { RecommendChannel } from "./components/RecommendChannel";
import { Button } from "./components/ui/button";
import DiamondPlus from "@/assets/icons/diamond_plus.svg?react";
import Inventory from "@/assets/icons/inventory.svg?react";
import Twitter from "@/assets/icons/twitter.svg?react";
import Docs from "@/assets/icons/document.svg?react";
import React from "react";
import { Outlet } from "react-router-dom";

console.log(Inventory);

const channel = {
  id: "1",
  name: "Shad",
  avatar: "",
  game: "League of Legends",
};

const actions = [
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
  },
  {
    icon: <Docs />,
    label: "Docs",
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
              <RecommendChannel channel={channel} />
              <RecommendChannel channel={channel} />
              <RecommendChannel channel={channel} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {actions.map((action, index) => (
              <div key={index} className="flex items-center text-2xl font-[FairyMuffin]">
                {React.cloneElement(action.icon, { width: "40px", height: "40px" })}
                <Button variant="link">
                  <span className="text-xl">{action.label}</span>
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="h-full overflow-hidden">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default App;
