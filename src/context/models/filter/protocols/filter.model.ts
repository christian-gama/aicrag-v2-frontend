import { filterActions } from '..'

export type FilterStates<T extends { [key: string]: unknown }> = {
  filters: T
}

export type FilterActions = typeof filterActions

export type FilterPayloads = {
  payload: {}
}
