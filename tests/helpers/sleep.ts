export const sleep = async (ms: number = 1) =>
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
