type IHandler<Props extends Record<string, unknown>> = (props: Partial<Props>, states: Record<string, any>) => void

export default IHandler
