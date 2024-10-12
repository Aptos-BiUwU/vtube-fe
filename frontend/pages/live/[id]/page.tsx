import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { streamers } from "@/utils/db";
import BattlePage from "@/pages/pk/[id]/page";
import LivePage from "./Live";

export default function LivestreamPage() {
  const [battleStarted, setBattleStarted] = useState(false);
  const { channel } = useParams();
  const channelInfo = streamers.find((streamer) => streamer.uid === channel);

  useEffect(() => {
    // setTimeout(() => {
    //   setBattleStarted(true);
    // }, 5000);
  }, []);

  return battleStarted ? <BattlePage streamer={channelInfo} /> : <LivePage channelInfo={channelInfo} />;
}
