import { createSlice } from '@reduxjs/toolkit'
import IModal from './protocols/modal.model'

const initialModalState: IModal = {
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen
    },
    closeModal: (state) => {
      state.isOpen = false
    },
    openModal: (state) => {
      state.isOpen = true
    }
  }
})

export const { closeModal, openModal, toggleModal } = modalSlice.actions

export default modalSlice.reducer
