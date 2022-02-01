export type Storage = {
  set: (value: string) => void
  get: () => string | null
  reset: () => void
}
