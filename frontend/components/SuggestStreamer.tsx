type SuggestStreamerProps = {
  img?: string;
  name: string;
};

export default function SuggestStreamer({ img, name }: SuggestStreamerProps) {
  return (
    <div className="flex flex-col gap-4">
      <img className="rounded-full aspect-square max-w-[100px]" src={img ? img : "https://github.com/shadcn.png"} />
      <h3 className="font-[FairyMuffin] text-2xl text-center">{name}</h3>
    </div>
  );
}
