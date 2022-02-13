import { createSlice } from '@reduxjs/toolkit'
import { FilterPayloads, FilterStates } from './protocols/filter.model'

const initialFilterState: FilterStates<any> = {
  filters: {}
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    resetFilter: (state) => {
      state.filters = {}
    },

    setFilter: (state, action: FilterPayloads) => {
      state.filters = {
        ...state.filters,
        ...action.payload
      }
    }
  }
})
