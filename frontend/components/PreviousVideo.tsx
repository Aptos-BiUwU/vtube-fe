import Avatar from "@/assets/images/avatar.png";

export default function PreviousVideo() {
  return (
    <div className="w-full rounded-lg min-w-[400px] min-h-fit overflow-visible">
      <div className="bg-[#D9D9D9] relative w-full aspect-video rounded-lg">
        <div className="absolute top-2 left-2 bg-[#F1D3FF] p-2 rounded-lg">7:00:00</div>
        <div className="absolute bottom-2 left-2 bg-[#F1D3FF] p-2 rounded-lg">125K views</div>
        <div className="absolute bottom-2 right-2 bg-[#F1D3FF] p-2 rounded-lg">6 days ago</div>
      </div>
      <img src={Avatar} />
    </div>
  );
}
