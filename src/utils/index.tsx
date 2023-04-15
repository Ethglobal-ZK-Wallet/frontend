
import { getAddress } from 'ethers/lib/utils'

export const isAddress = (value: string) => {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export const shortenAddress = (address: string, chars = 4) => {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 1)}...${parsed.substring(42 - chars)}`
}