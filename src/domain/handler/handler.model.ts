type IHandler<Props extends Record<string, unknown>> = (
  props: Partial<Props>,
  states: Record<string, (value?: any) => void>
) => void

export default IHandler
