import Token from "@/components/Token";
import { tokens } from "@/utils/db";

export default function TokensPage() {
  return (
    <div className="text-center overflow-scroll pb-2" style={{ height: "calc(100vh - 60px)" }}>
      <h1 className="primary text-4xl font-[FairyMuffin] mb-2">Register to available tokens</h1>
      <section className="grid grid-cols-3 mx-auto w-fit gap-11 p-2">
        {tokens.slice(1).map((token, index) => (
          <Token key={index} token={token} />
        ))}
      </section>
    </div>
  );
}
