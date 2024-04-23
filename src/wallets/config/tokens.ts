import { ERC20Token, NativeToken, Token } from '@/wallets/config/type';
import BTCIcon from '@/components/icons/coins/BTCIcon';
import USDTIcon from '@/components/icons/coins/USDTIcon';
import USDCIcon from '@/components/icons/coins/USDCIcon';
import BRCIcon from '@/components/icons/coins/BRCIcon';
import ETHIcon from '@/components/icons/coins/ETHIcon';

const btc: NativeToken = {
  id: 'BTC',
  name: 'BTC',
  symbol: 'BTC',
  decimals: 8,
  isNative: true,
  type: 'native',
  icon: BTCIcon,
};

export const evmBtc: NativeToken = {
  id: 'BTC',
  name: 'BTC',
  symbol: 'BTC',
  decimals: 18,
  isNative: true,
  icon: BTCIcon,
  type: 'native',
};

const pegTokenETH: ERC20Token = {
  id: 'ETH',
  name: 'ETH',
  symbol: 'ETH',
  decimals: 18,
  isNative: false,
  icon: ETHIcon,
  type: 'erc20',
  contractAddress: '0xef63d4e178b3180beec9b0e143e0f37f4c93f4c2',
};

const pegTokenUSDT: ERC20Token = {
  id: 'USDT',
  name: 'USDT',
  symbol: 'USDT',
  decimals: 6,
  isNative: false,
  icon: USDTIcon,
  type: 'erc20',
  contractAddress: '0xfe9f969faf8ad72a83b761138bf25de87eff9dd2',
};

const pegTokenUSDC: ERC20Token = {
  id: 'USDC',
  name: 'USDC',
  symbol: 'USDC',
  decimals: 6,
  isNative: false,
  icon: USDCIcon,
  type: 'erc20',
  contractAddress: '0x9827431e8b77e87c9894bd50b055d6be56be0030',
};

export const chainTokens: { [key: string]: Token[] } = {
  btc_mainnet: [btc],
  btc_testnet: [btc],
  bitlayer_testnet: [evmBtc],
  bitlayer_mainnet: [evmBtc],
};

export const pegTokens = [pegTokenETH, pegTokenUSDT, pegTokenUSDC];
