type AboutSectionProps = {
  name: string;
};

export default function AboutSection({ name }: AboutSectionProps) {
  return (
    <>
      <h2 className="text-3xl font-[FairyMuffin]">About {name} </h2>
      <div className="gradient bg-opacity-20 text-black rounded-md px-8 py-6 mr-20">
        <div className="flex items-end font-bold">
          <h3 className="text-3xl font-[Poppins] mr-4">123K</h3>
          <span className="text-xl">Follower</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare mollis turpis, ultrices gravida
          tortor porta quis. Nullam ultricies turpis eget est convallis, vitae volutpat elit condimentum.{" "}
        </p>
      </div>
    </>
  );
}
