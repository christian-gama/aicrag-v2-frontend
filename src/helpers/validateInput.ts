import { FormStates } from '@/context/models/form/protocols/form.model'

const validateInput = (config: {
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

export default validateInput
