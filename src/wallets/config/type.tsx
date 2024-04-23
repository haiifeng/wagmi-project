import type { Chain, ChainContract } from 'viem';
export type { Chain } from 'viem';

export interface PageData<T> {
  total: number;
  list: T[];
}

export type GetHisReq = {
  pageNo: number;
  pageSize: number;
  from: string; //钱包地址
  senderAppId: number;
  receiverAppId: number;
  sourceType: string;
};

export interface BaseResp<T> {
  code: number;
  msg: string;
  data: T;
}

export type BasicToken = {
  id: string;
  name: string; //不同链的tokenName要相同
  symbol: string;
  type: string;
  icon?: string | React.FC<React.SVGProps<SVGSVGElement>>;
  decimals: number; // 币种的本身的精度
};

export type ERC20Token = {
  isNative: false;
  type: 'erc20';
  contractAddress: string;
} & BasicToken;

export type BRC20Token = {
  isNative: false;
  type: 'brc20';
  tick?: string;
  supply?: string;
  limitPerMint?: string;
  minted?: string;
  tokenAddress?: string;
} & BasicToken;

export type NativeToken = {
  isNative: true;
  type: 'native';
} & BasicToken;

export type Token = BRC20Token | NativeToken | ERC20Token;

export enum NetworkType {
  btc = 'btc',
  evm = 'evm',
}

export interface BaseChainType {
  id: string;
  active?: boolean;
  name: string;
  symbol: string;
  chain: Chain;
  icon?: string | React.FC<React.SVGProps<SVGSVGElement>>;
  testnet?: boolean;
  txExplorer?: string;
  layerZeroChainId?: number;
  networkType: NetworkType;
  contracts?: { [key: string]: ChainContract };
  [x: string | number | symbol]: unknown;
}

export interface ChainItemType extends BaseChainType {
  // btc->evm合约地址
  bridgeInContract?: string;
  // btc->evm合约地址
  bridgeInReceiveWalletAddress?: string;
  // evm->btc合约地址
  bridgeOutContract?: string;
}
