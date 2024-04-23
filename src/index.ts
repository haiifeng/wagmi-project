export const signTypedDataData: any = {
  domain: {
    name: 'PermitUSDT',
    version: '1',
    chainId: 200810,
    verifyingContract: '0xc90ead4a08e02066b2d2d8f452dd6bf0aa1a5e07',
  },
  types: {
    Permit: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  },
  primaryType: 'Permit',
  message: {
    owner: '0xDDf3b7D5c519e6Fc0241f80acC6cDD150F3a8512',
    spender: '0x3907aA483FAe9DE1128EbEe92737a37aB377e826',
    value: '3000000000000000000' as any,
    nonce: 40 as any,
    deadline: '1713598842' as any,
  },
};
