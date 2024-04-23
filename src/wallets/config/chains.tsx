import { type Chain } from 'viem';
import BitlayerChainIcon from '@/components/icons/BitlayerChainIcon';
import { BaseChainType, NetworkType } from '@/wallets/config/type';

export const btcTestnetChain = {
  id: 1,
  rpcUrls: {
    default: { http: ['https://testnet-rpc.zkbridge.com/bitcoin'] },
  },
  name: 'Bitcoin Testnet3',
  nativeCurrency: {
    name: 'BTC',
    symbol: 'BTC',
    decimals: 8,
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://mempool.space/testnet' },
  },
} as const satisfies Chain;

export const btcTestnet: BaseChainType = {
  id: 'btc_testnet',
  name: 'Bitcoin Testnet3',
  symbol: 'BTC_TEST',
  chain: btcTestnetChain,
  icon: 'https://img.zkbridge.com/jssdk/btc_test.png',
  testnet: true,
  active: false,
  networkType: NetworkType.btc,
};

export const btcMainnetChain = {
  id: 0,
  rpcUrls: {
    default: { http: ['https://mainnet-rpc.zkbridge.com/bitcoin'] },
  },
  name: 'Bitcoin Mainnet',
  nativeCurrency: {
    name: 'BTC',
    symbol: 'BTC',
    decimals: 8,
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://mempool.space' },
  },
} as const satisfies Chain;

export const btcMainnet: BaseChainType = {
  id: 'btc_mainnet',
  name: 'Bitcoin',
  symbol: 'BTC',
  chain: btcMainnetChain,
  icon: 'https://www.zkbridge.com/assets/bitcoin-e39dfd14.svg',
  testnet: false,
  active: true,
  networkType: NetworkType.btc,
};

export const bitlayerTestnetChain = {
  id: 200810,
  rpcUrls: {
    default: { http: ['https://testnet-rpc.bitlayer.org'] },
  },
  name: 'Bitlayer Testnet',
  nativeCurrency: {
    name: 'BTC',
    symbol: 'BTC',
    decimals: 18,
  },
  custom: {
    iconUrls: ['https://img.zkbridge.com/jssdk/bitlayer_testnet.png'],
  },
  testnet: true,
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://testnet.btrscan.com' },
  },
} as const satisfies Chain;

export const bitlayerTestnet: BaseChainType = {
  id: 'bitlayer_testnet',
  name: 'Bitlayer Testnet',
  symbol: 'BITLAYER_TEST',
  chain: bitlayerTestnetChain,
  icon: BitlayerChainIcon,
  testnet: true,
  active: false,
  networkType: NetworkType.evm,
  contracts: {
    bridge: { address: '0x9e97da6c68f6eb9c66e097bae7ea8fdfa9a92b4d' },
  },
};

export const bitlayerMainnetChain = {
  id: 200901,
  rpcUrls: {
    default: { http: ['https://rpc.bitlayer.org'] },
  },
  name: 'Bitlayer Mainnet',
  nativeCurrency: {
    name: 'BTC',
    symbol: 'BTC',
    decimals: 18,
  },
  custom: {
    iconUrls: ['https://img.zkbridge.com/jssdk/bitlayer.png'],
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://www.btrscan.com' },
  },
} as const satisfies Chain;

export const bitlayerMainnet: BaseChainType = {
  id: 'bitlayer_mainnet',
  name: 'Bitlayer',
  symbol: 'BITLAYER',
  chain: bitlayerMainnetChain,
  icon: BitlayerChainIcon,
  testnet: false,
  active: true,
  networkType: NetworkType.evm,
  contracts: {
    bridge: { address: '0x695Ed0BA6b7b6E9b534308CF6215537AB963F7B7' }, // TODO: MUST TO BE UPDATED
  },
};

export const chainMap: { [key: string]: BaseChainType } = {
  btc_testnet: btcTestnet,
  btc_mainnet: btcMainnet,
  bitlayer_testnet: bitlayerTestnet,
  bitlayer_mainnet: bitlayerMainnet,
};

export const chainSymbolMap: { [key: string]: BaseChainType } = {
  [btcTestnet.symbol]: btcTestnet,
  [btcMainnet.symbol]: btcMainnet,
  [bitlayerTestnet.symbol]: bitlayerTestnet,
  [bitlayerMainnet.symbol]: bitlayerMainnet,
};
