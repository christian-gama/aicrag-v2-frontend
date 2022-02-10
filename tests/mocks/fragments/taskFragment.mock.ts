import { mockVariables } from '..'

export const taskFragmentMock = {
  task: {
    commentary: mockVariables.commentary,
    date: {
      full: mockVariables.date,
      day: new Date(Date.parse(mockVariables.date)).getDay(),
      hours: new Date(Date.parse(mockVariables.date)).getHours(),
      month: new Date(Date.parse(mockVariables.date)).getMonth(),
      year: new Date(Date.parse(mockVariables.date)).getFullYear()
    },
    duration: mockVariables.duration,
    id: mockVariables.uuid,
    logs: {
      createdAt: mockVariables.date,
      updatedAt: null
    },
    status: mockVariables.status,
    taskId: mockVariables.taskId,
    type: mockVariables.type,
    usd: (+mockVariables.duration / 60) * 65
  }
}
