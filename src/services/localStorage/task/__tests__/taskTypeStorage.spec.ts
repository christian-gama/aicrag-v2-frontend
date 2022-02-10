import { TaskTypeStorage } from '..'

const makeSut = () => {
  return new TaskTypeStorage()
}

describe('taskTypeStorage', () => {
  it('returns null if there is not data stored', () => {
    const sut = makeSut()
    const type = sut.get()

    expect(type).toBeNull()
  })

  it('returns the type that is stored', () => {
    const sut = makeSut()
    const type = 'QA'
    sut.set(type)

    const result = sut.get()

    expect(result).toBe(type)
  })

  it('removes the type if reset is called', () => {
    const sut = makeSut()
    sut.set('TX')
    sut.reset()

    const result = sut.get()

    expect(result).toBeNull()
  })
})
