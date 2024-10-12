import ChannelInfo from "@/components/ChannelInfo";
import Banner from "@/assets/images/banner.png";
import { Button } from "@/components/ui/button";
import HomeSection from "./home";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideosSection from "./videos";
import AboutSection from "./about";
import ChannelActions from "@/components/ChannelActions";
import { streamers } from "@/utils/db";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { id } = useParams();
  const streamer = streamers.find((streamer) => streamer.uid === id);
  return (
    <>
      <div className="overflow-y-scroll overflow-x-visible pl-2" style={{ height: "calc(100vh - 60px)" }}>
        <div
          className="flex flex-col overflow-y-visible mb-6"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div>
            <img src={Banner} className="mx-auto mb-8" />
            <div className="flex mb-8 pr-20">
              <ChannelInfo channel={streamer as any} />
              <ChannelActions channel={streamer} />
            </div>
          </div>
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="flex items-center mb-4 justify-start bg-transparent">
              <TabsTrigger value="home" className="group">
                <Button
                  variant="outline"
                  className="rounded-full text-lg border-0 group-data-[state=inactive]:bg-transparent"
                >
                  <span className="group-data-[state=active]:primary font-bold font-[FairyMuffin] text-xl">Home</span>
                </Button>
              </TabsTrigger>
              <TabsTrigger value="videos" className="group">
                <Button
                  variant="outline"
                  className="font-bold font-[FairyMuffin] text-lg rounded-full border-0 group-data-[state=inactive]:bg-transparent"
                >
                  <span className="group-data-[state=active]:primary">Videos</span>
                </Button>
              </TabsTrigger>
              <TabsTrigger value="about" className="group">
                <Button
                  variant="outline"
                  className="font-bold font-[FairyMuffin] text-lg rounded-full border-0 group-data-[state=inactive]:bg-transparent"
                >
                  <span className="group-data-[state=active]:primary">About</span>
                </Button>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <HomeSection />
            </TabsContent>
            <TabsContent value="videos">
              <VideosSection />
            </TabsContent>
            <TabsContent value="about">
              <AboutSection name="Shad" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
