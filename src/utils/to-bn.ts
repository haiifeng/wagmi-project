import BigNumber from 'bignumber.js';
import { BigNumber as BN } from 'ethers';

export type BigNumberLike = string | number | BigNumber | BN;

/**
 * @description 将数值转换成 bignumber
 */
export default function toBN(n: BigNumberLike) {
  if (!n) return new BigNumber(0);
  return new BigNumber(n.toString());
}

export function getValiedRoundNumber(n: BigNumberLike) {
  if (isNaN(Number(n))) {
    return '--';
  }
  if (toBN(n).isLessThan(1)) {
    const ret = toBN(n).toExponential(4, BigNumber.ROUND_DOWN).toString();
    return toBN(ret).toFormat();
  }
  const _v = toBN(n).toFixed(4, BigNumber.ROUND_DOWN);
  return toBN(_v).toString();
}
