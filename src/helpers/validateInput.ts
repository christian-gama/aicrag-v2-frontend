import { FormStates } from '@/context/models/form'

export const validateInput = (config: {
  state: FormStates
  name: string
  value: any
}) => {
  const {
    state: {
      form: { validator, data }
    },
    value,
    name
  } = config

  return validator?.validate(name, {
    ...data,
    [name]: value
  })
}
