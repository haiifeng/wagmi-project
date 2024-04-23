const defaultEror = 'Unable to call smart contracts.';
const errorsShouldReplacedByKeyword = {
  'user rejected transaction': 'User rejected transaction',
  'transaction underpriced': 'Transaction underpriced',
  'network does not support ENS': 'Network does not support ENS',
  'insufficient funds for intrinsic transaction cost':
    'Insufficient funds for intrinsic transaction cost.',
  'Block header is not set': 'Network Synchronization Exception, Please try again later.',
  'Requested data is not available':
    'Unstable rpc connection. Please check Or renew your rpc configuration in your wallet.',
};

export const getReadableChainErrorInfo = (message: string) => {
  if (!message || typeof message !== 'string') {
    return defaultEror;
  }

  for (const [key, val] of Object.entries(errorsShouldReplacedByKeyword)) {
    if (message.toLowerCase().includes(key.toLowerCase())) {
      return val;
    }
  }

  let m = message.match(/reason="(.+?)"/);
  if (m && m[1]) {
    return m[1];
  }
  m = message.match(/error={"reason":"(.+?)"/);
  if (m && m[1]) {
    return m[1];
  }
  m = message.match(/reason string "(.*?)"/);
  if (m && m[1]) {
    return m[1];
  }
  m = message.match(/(?<info>.*?) (in call exceptions|\(argument=)/);
  if (m) {
    return m.groups?.info;
  }
  // if (message.split(' ').length < 20) {
  // return message.slice(0, 20) + '...';

  const keywords = [
    'missing revert data in call exception; Transaction reverted without a reason string',
  ];
  for (const keyword of keywords) {
    if (message.toLowerCase().includes(keyword.toLowerCase())) {
      return keyword;
    }
  }
  m = message.match(/(?<err>.*?) \[ See: https:/);
  if (m) {
    return m.groups?.err;
  }

  return message;

  // }
  // return defaultEror;
};

export const getReadableError = (e: any) => {
  if (typeof e === 'object') {
    if (e.message?.toLowerCase() === 'Internal JSON-RPC error.'.toLowerCase() && e.data?.message) {
      return getReadableChainErrorInfo(e.data.message);
    }
    if (e.message) {
      return getReadableChainErrorInfo(e.message);
    }
  }

  if (typeof e === 'string') {
    return getReadableChainErrorInfo(e);
  }
  return 'Something went wrong';
};
