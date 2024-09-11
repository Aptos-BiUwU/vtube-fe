type MessageProps = {
  name: string;
  message: string;
};

export default function Message({ name, message }: MessageProps) {
  return (
    <div className="text-lg">
      <span>{name}</span>: <span>{message}</span>
    </div>
  );
}
