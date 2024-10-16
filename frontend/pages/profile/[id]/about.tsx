type AboutSectionProps = {
  name: string;
  about: string;
};

export default function AboutSection({ name, about }: AboutSectionProps) {
  return (
    <>
      <h2 className="text-3xl font-[FairyMuffin]">About {name} </h2>
      <div className="gradient bg-opacity-20 text-black rounded-md px-8 py-6 mr-20">
        <div className="flex items-end font-bold">
          <h3 className="text-3xl font-[Poppins] mr-4">123K</h3>
          <span className="text-xl">Follower</span>
        </div>
        <p>{about}</p>
      </div>
    </>
  );
}
