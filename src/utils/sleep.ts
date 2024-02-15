export const sleep = (
  ms: number,
  data: unknown = undefined,
): Promise<unknown> =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(() => resolve(data), ms))
