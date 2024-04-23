import { createContext, useCallback, useEffect, useState } from 'react';
import { UNISAT_WALLET_KEY } from './config';
import { BigNumber, utils } from 'ethers';

export const uniSatLocal = {
  get() {
    const res = localStorage.getItem(UNISAT_WALLET_KEY);
    return res && JSON.parse(res);
  },
  set(value: boolean) {
    return localStorage.setItem(UNISAT_WALLET_KEY, JSON.stringify(value));
  },
};

interface UniSatContextData {
  unisat?: UniSat;
  installed: boolean;
  storage: typeof uniSatLocal;
  address?: string;
  active: boolean;
  balance: string;
  network: string;
  connect: () => Promise<void>;
  disconnect: () => void;
  getBtcBalance: () => Promise<void>;
}

export const UniSatContext = createContext<UniSatContextData>({} as UniSatContextData);

export const UniSatProvider = ({ children }: { children: React.ReactNode }) => {
  const [installed, setInstalled] = useState<boolean>(false);
  const [unisat, setUnisat] = useState(typeof window === 'undefined' ? undefined : window.unisat);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<boolean>(false);
  const [balance, setBalance] = useState<string>('0');
  const [network, setNetwork] = useState<string>('');

  const getBtcBalance = useCallback(async () => {
    if (!unisat) return;
    const balanceInfo = await unisat.getBalance();
    if (balanceInfo) {
      const total = BigNumber.from(balanceInfo.total);
      setBalance(utils.formatUnits(total, 8));
    }
  }, [unisat]);

  const connect = useCallback(async () => {
    if (!unisat) {
      return;
    }
    const accounts = await unisat.requestAccounts();
    const network = await unisat.getNetwork();
    setAddress(accounts[0]);
    setNetwork(network);
    setActive(true);
    getBtcBalance();
    uniSatLocal.set(true);
  }, [unisat, getBtcBalance]);

  const disconnect = useCallback(() => {
    setActive(false);
    setAddress(undefined);
    setBalance('0');
    setNetwork('');
    uniSatLocal.set(false);
  }, []);

  const accountsChanged = useCallback(
    (accounts: string[]) => {
      if (accounts.length) {
        setAddress(accounts[0]);
      }
    },
    [setAddress],
  );

  const networkChanged = useCallback(
    async (network: string) => {
      if (!unisat) {
        return;
      }
      setNetwork(network);
    },
    [unisat],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!window.unisat) {
      return;
    }

    const unisat = window.unisat;
    setUnisat(unisat);
    setInstalled(true);

    const autoConnect = uniSatLocal.get();
    if (autoConnect) {
      unisat.getNetwork().then(networkChanged);
      unisat.getAccounts().then((accounts: string[]) => {
        if (accounts.length) {
          accountsChanged(accounts);
          setActive(true);
          getBtcBalance();
        }
      });
      unisat.on('accountsChanged', accountsChanged);
      unisat.on('networkChanged', networkChanged);
    }

    return () => {
      unisat.removeListener('accountsChanged', accountsChanged);
      unisat.removeListener('networkChanged', networkChanged);
    };
  }, [setInstalled, setUnisat, accountsChanged, networkChanged, getBtcBalance]);

  const value: UniSatContextData = {
    unisat,
    installed,
    storage: uniSatLocal,
    address,
    active,
    balance,
    network,
    connect,
    disconnect,
    getBtcBalance,
  };

  return <UniSatContext.Provider value={value}>{children}</UniSatContext.Provider>;
};
