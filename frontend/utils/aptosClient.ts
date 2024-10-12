import { NETWORK } from "@/constants";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { AccountInfo } from "@aptos-labs/wallet-adapter-react";
import { Campaign } from "./types";

const aptos = new Aptos(new AptosConfig({ network: NETWORK }));

// Reuse same Aptos instance to utilize cookie based sticky routing
export function aptosClient() {
  return aptos;
}

export async function registerBiUwU() {
  const resp = await fetch("http://140.245.117.232:2424/transactions/getRegisterBiUwUTxData", {
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

  const hash = await (window as any).pontem.signAndSubmit(txData);
  console.log(hash);
}

export const isRegistered = async (account: string) => {
  const resp = await fetch("http://140.245.117.232:2424/views/viewBiUwURegistered", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userAddress: account,
    }),
  });
  const data = await resp.json();

  console.log(data);

  return data?.registered[0];
};

export const fetchAmount = async (account: string) => {
  await isRegistered(account);
  const resp = await fetch("http://140.245.117.232:2424/views/viewBiUwUBalance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userAddress: account,
    }),
  });
  const data = await resp.json();

  return data?.balance[0];
};

export const fetchCampaign = async (id: string): Promise<Campaign> => {
  const resp = await fetch("http://140.245.117.232:2424/views/viewCampaignInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      campaignId: id,
    }),
  });
  const data = await resp.json();
  if (!data) {
    return null;
  }
  console.log(data);

  return {
    id: id,
    wallet: data[0],
    current: data[1],
    goal: data[2],
  };
};

export const getDonateTxData = async (id: string, amount: string) => {
  const resp = await fetch("http://140.245.117.232:2424/transactions/getDonateTxData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      campaignId: id,
      amount,
    }),
  });
  const data = await resp.json();
  console.log(data);

  return {
    function: data.txData.function,
    type_arguments: data.txData.typeArguments || [],
    arguments: data.txData.functionArguments || [],
  };
};

export const getBattleTxData = async (battleId: string, amount: string, side: boolean) => {
  const resp = await fetch("http://140.245.117.232:2424/transactions/getAttackTxData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      battleId,
      amount,
      side,
    }),
  });
  const data = await resp.json();
  console.log(data);

  return {
    function: data.txData.function,
    type_arguments: data.txData.typeArguments || [],
    arguments: data.txData.functionArguments || [],
  };
};

export const getSubcriptionTxData = async (coinAddress: string) => {
  const resp = await fetch("http://140.245.117.232:2424/transactions/getUpdateTierTxData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      coinAddress,
      tier: 1,
    }),
  });
  const data = await resp.json();
  console.log(data);

  return {
    function: data.txData.function,
    type_arguments: data.txData.typeArguments || [],
    arguments: data.txData.functionArguments || [],
  };
};

export const getDepositTxData = async (coinAddress: string, amount: number) => {
  const resp = await fetch("http://140.245.117.232:2424/transactions/getDepositTxData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      coinAddress,
      amount,
    }),
  });
  const data = await resp.json();
  console.log(data);

  return {
    function: data.txData.function,
    type_arguments: data.txData.typeArguments || [],
    arguments: data.txData.functionArguments || [],
  };
};
