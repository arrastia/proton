import type { ValueFunction, ValueOrFunction } from '../@types/Toast.types';

const isFunction = <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>): valOrFunction is ValueFunction<TValue, TArg> =>
  typeof valOrFunction === 'function';

export const resolveValue = <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg): TValue =>
  isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
