type StreamCategoryProps = {
  image?: string;
  name: string;
};

export default function StreamCategory({ image, name }: StreamCategoryProps) {
  return (
    <div className="relative inline-block max-w-[250px]">
      <img
        src={image ? image : "/frontend/assets/images/stream_category.png"}
        alt="Stream Category"
        className="block"
      />
      <h4 className="font-[Poppins] font-semibold text-xl whitespace-nowrap overflow-hidden text-ellipsis w-full text-center px-2">
        {name}
      </h4>
    </div>
  );
}
