import { fetchCoinBalance, getRegisterCoinTxData, isRegisteredCoin } from "@/utils/aptosClient";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

enum TokenStatus {
  NotRegistered,
  ComingSoon,
}

export default function Token({ token }) {
  const register = async () => {
    const tx = await getRegisterCoinTxData(token.address);
    await (window as any).aptos.signAndSubmitTransaction(tx);
    isRegistered.refetch();
  };

  const { account } = useWallet();

  const isRegistered = useQuery({
    queryKey: ["registered", token.address],
    queryFn: async () => {
      if (token.address === "") return TokenStatus.ComingSoon;
      const registered = await isRegisteredCoin(account?.address, token.address);
      if (registered) {
        return await fetchCoinBalance(account?.address, token.address);
      }

      return TokenStatus.NotRegistered;
    },
  });

  return (
    <div className="min-w-[320px] token-shadow p-4 rounded-lg font-[FairyMuffin]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <img src={token.icon} alt={token.symbol} className="w-[50px] aspect-square rounded-full" />
          <h2 className="text-xl font-[FairyMuffin]">{token.symbol}</h2>
        </div>
        <p className="text-gray-400">{token.name}</p>
      </div>
      <Button
        className="gradient bg-opacity-50 px-8 rounded-full py-0 text-black text-xl"
        variant="ghost"
        onClick={register}
        disabled={isRegistered.isLoading || isRegistered.data}
      >
        {isRegistered.isLoading ? (
          "Loading..."
        ) : isRegistered.data === TokenStatus.ComingSoon ? (
          "Coming soon"
        ) : isRegistered.data === TokenStatus.NotRegistered ? (
          "Register"
        ) : (
          <span className="font-[Poppins]">{isRegistered.data}</span>
        )}
      </Button>
    </div>
  );
}
