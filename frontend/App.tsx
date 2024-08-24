import { Header } from "@/components/Header";
import { Airplay, HomeIcon } from "lucide-react";
import { GradientIcon } from "./components/GradientIcon";
import Banner1 from "./assets/images/banner1.png";
import VideoPreview from "./components/VideoPreview";

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <section className="flex flex-col gap-4 w-[200px]">
          <GradientIcon focus={true}>
            <HomeIcon size={32} />
          </GradientIcon>
          <GradientIcon>
            <Airplay size={32} />
          </GradientIcon>
        </section>
        <section className="flex flex-col w-full">
          <img src={Banner1} alt="placeholder" className="mx-auto" />
          <div className="flex flex-col gap-8">
            <h3 className="font-[AlienWorld] text-white text-3xl">Trending</h3>
            <div className="grid grid-cols-3">
              <VideoPreview />
              <VideoPreview />
              <VideoPreview />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
