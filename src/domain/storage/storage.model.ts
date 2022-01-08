type Storage = {
  get: () => string | null
  reset: () => void
  set: (value: string) => void
}

export default Storage
