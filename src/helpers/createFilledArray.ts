export const createFilledArray = <T extends unknown>(
  length: number,
  value: T
) => Array.from({ length }, () => value)
