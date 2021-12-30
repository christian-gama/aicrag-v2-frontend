import { slices, Slices } from '../store/slices'

type ReducersReturn<T extends Slices | 'all'> = T extends Slices ? Reducers[T] : Reducers
type Reducers = { [K in Slices]: typeof slices[K]['reducer'] }

export const makeReducers = <T extends Slices | 'all'>(slice: T): ReducersReturn<T> => {
  const mappedSlices: Partial<Reducers> = {}

  for (const key in slices) {
    // @ts-expect-error
    mappedSlices[key as Slices] = slices[key as keyof Reducers].reducer
  }

  // @ts-expect-error
  return slice !== 'all' ? mappedSlices[slice] : mappedSlices
}
