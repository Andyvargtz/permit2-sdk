import { BigNumber } from '@ethersproject/bignumber'

export const PERMIT2_ADDRESS = '0xc7AC501814cF096EF536C03E40eef835Cfd407cC'

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
