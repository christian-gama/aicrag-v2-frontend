import { Storage } from '../protocols'

export class TaskTypeStorage implements Storage {
  get () {
    return localStorage.getItem('taskType')
  }

  reset () {
    localStorage.removeItem('taskType')
  }

  set (value: string) {
    localStorage.setItem('taskType', value)
  }
}
