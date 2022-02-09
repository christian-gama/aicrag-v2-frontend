export type String<T> = {
  [P in keyof T]: string
}
