import { Options } from './types'
export interface OptionsCopy {
  url?: string
}
export default async function (name: Options) {
  return name
}
