import { NETWORK } from "@/constants";
import { Account, AccountAddress, Aptos, AptosConfig, Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";

const aptos = new Aptos(new AptosConfig({ network: NETWORK }));

// Reuse same Aptos instance to utilize cookie based sticky routing
export function aptosClient() {
  return aptos;
}

export async function registerBiUwU(userAddress: string) {
  const resp = await fetch("http://localhost:2424/transactions/getRegisterBiUwUTxData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  const txData = {
    function: data.txData.function,
    type_arguments: data.txData.typeArguments,
    arguments: [],
  };
  console.log(txData);

  const hash = await window.martian.generateSignAndSubmitTransaction(userAddress, txData);
  // console.log(hash);
}
