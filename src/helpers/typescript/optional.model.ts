type Optional<T> = {
  [P in keyof T]: T[P] | undefined
}

export default Optional
