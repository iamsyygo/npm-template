import { Options } from './types';
export interface OptionsCopy {
    url?: string;
}
export default function (name: Options): Promise<Options>;
