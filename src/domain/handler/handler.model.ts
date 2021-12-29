type IHandler<Props extends Record<string, unknown>, States extends Record<string, unknown>> = (
  props: Partial<Props>,
  states: States
) => void

export default IHandler
