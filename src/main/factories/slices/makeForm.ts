import { makeFormSlice } from '@/infra/store/form'

export const createTaskFormSlice = makeFormSlice('createTaskForm')
export const updateTaskFormSlice = makeFormSlice('updateTaskForm')
