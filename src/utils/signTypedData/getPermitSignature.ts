
async function getPermitSignature(
  signer: any,
  token: any,
  spender: string,
  value: string,
  deadline: string,
  chain: any,
) {
  const singerAddress = await signer.getAddress();
  const [nonce, name, version, chainId] = await Promise.all([
    token.nonces(singerAddress),
    token.name(),
    '1',
    chain.chain.id,
  ]);
  const a = {
    name,
    version,
    chainId,
    verifyingContract: token.address,
    // name: 'PermitUSDT',
    // version: '1',
    // chainId: 200810,
    // verifyingContract: '0xc90ead4a08e02066b2d2d8f452dd6bf0aa1a5e07',
  };
  const b = {
    Permit: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'value',
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
    spender,
    value,
    nonce: nonce.toNumber(),
    deadline,
  };
  console.log('getPermitSignature input', a, b, c);
  const signature = await signer._signTypedData(a, b, c);
  console.log('getPermitSignature out:', signature);
  return signature;
}

export default getPermitSignature;
