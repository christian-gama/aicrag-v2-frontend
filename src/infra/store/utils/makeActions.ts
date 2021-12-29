import { slices, Slices } from '../slices'

export const makeActions = <T extends Slices | 'all'>(slice: T): ActionsReturn<T> => {
  const mappedSlices: Partial<Actions> = {}

  for (const key in slices) {
    // @ts-expect-error
    mappedSlices[key as Slices] = slices[key as keyof Actions].actions
  }

  // @ts-expect-error
  return slice !== 'all' ? mappedSlices[slice] : mappedSlices
}

type Actions = { [K in keyof typeof slices]: typeof slices[K]['actions'] }

type ActionsReturn<T extends Slices | 'all'> = T extends keyof typeof slices ? Actions[T] : Actions
