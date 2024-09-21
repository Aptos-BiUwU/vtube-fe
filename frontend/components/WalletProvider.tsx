import { PropsWithChildren } from "react";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
// Internal components
import { useToast } from "@/components/ui/use-toast";
// Internal constants
import { NETWORK } from "@/constants";

import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";

export function WalletProvider({ children }: PropsWithChildren) {
  const { toast } = useToast();

  return (
    <AptosWalletAdapterProvider
      plugins={[new MartianWallet()]}
      autoConnect={true}
      dappConfig={{ network: NETWORK }}
      onError={(error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error || "Unknown wallet error",
        });
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}
