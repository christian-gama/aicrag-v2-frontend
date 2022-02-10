import { TaskTypeStorage } from '@/services/localStorage/task'

export const makeTaskTypeStorage = () => {
  return new TaskTypeStorage()
}
