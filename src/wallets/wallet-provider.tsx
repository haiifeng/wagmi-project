import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { bitlayerMainnetChain, bitlayerTestnetChain } from './config/chains';
import { UniSatProvider } from './unisat-provider';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
  chains: [bitlayerTestnetChain, bitlayerMainnetChain],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' }),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [bitlayerTestnetChain.id]: http(),
    [bitlayerMainnetChain.id]: http(),
  },
  ssr: true,
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

const queryClient = new QueryClient();

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <UniSatProvider>{children}</UniSatProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
