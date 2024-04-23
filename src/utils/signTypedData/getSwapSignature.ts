// import { BaseChainType } from '@/wallets/config/type';

async function getSwapSignature(
  signer: any,
  token: any,
  tokenAddress: string,
  amountIn: string,
  price: string,
  deadline: string,
  chain: any,
  swapContract: string,
) {
  console.log('swap begin');
  const singerAddress = await signer.getAddress();
  // console.log('swap signer.address:', singerAddress);
  const [nonce, name, version, chainId] = await Promise.all([
    token.nonces(singerAddress),
    token.name(),
    '1',
    chain.chain.id,
  ]);
  const a = {
    // name: 'TokenExchange',
    // version: '1',
    // chainId: 200810,
    // verifyingContract: TOKEN_EXCHANGE_TEST_ADDRESS,
    name,
    version,
    chainId,
    verifyingContract: swapContract,
  };
  const b = {
    Swap: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'tokenAddress',
        type: 'address',
      },
      {
        name: 'amountIn',
        type: 'uint256',
      },
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
      {
        name: 'deadline',
        type: 'uint256',
      },
    ],
  };
  const c = {
    owner: singerAddress,
    tokenAddress,
    amountIn,
    price,
    nonce: nonce.toNumber(),
    deadline,
  };
  // console.log('getSwapSignature:', a, b, c);
  const signature = await signer._signTypedData(a, b, c);
  return signature;
}

export default getSwapSignature;
