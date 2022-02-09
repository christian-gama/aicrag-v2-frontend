export type Boolean<T> = {
  [P in keyof T]: boolean
}
