type IHandler<Params extends Record<string, unknown>> = (params: Params) => void

export default IHandler
