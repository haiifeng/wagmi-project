import { providers } from 'ethers';
import type { AppLoadContext as OriginalAppLoadContext } from '@remix-run/cloudflare';
import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

type UniSatEvent = 'accountsChanged' | 'networkChanged';

declare global {
  interface UniSat {
    pushPsbt(signedPsbt: string[]): Promise<string>;
    signPsbt(hex: string): Promise<string[]>;
    getPublicKey(): Promise<string>;
    requestAccounts: () => Promise<string[]>;
    getAccounts: () => Promise<string[]>;
    getNetwork: () => Promise<string>;
    switchNetwork: (network: string) => Promise<void>;
    getBalance: () => Promise<{ confirmed: bigint; unconfirmed: bigint; total: bitint }>;

    on: <E extends UniSatEvent>(
      event: E,
      listener: (args: E extends 'accountsChanged' ? string[] : string) => void,
    ) => void;

    removeListener: <E extends UniSatEvent>(
      event: E,
      listener: (args: E extends 'accountsChanged' ? string[] : string) => void,
    ) => void;
  }

  interface Window {
    ethereum?: providers.ExternalProvider;
    unisat?: UniSat;
    gtag: (option: string, gaTrackingId: string, options: Record<string, unknown>) => void;
  }
}

declare module '@remix-run/cloudflare' {
  interface AppLoadContext extends OriginalAppLoadContext {
    cloudflare: {
      env: Record<string, string>;
    };
  }
}
