import { FormStates } from '@/context/models/form'

type ValidationInput = {
  name: string
  value: any
  state: FormStates<any>
}

export const validateInput = ({
  name,
  value,
  state: {
    form: { validator, data }
  }
}: ValidationInput) =>
  validator?.validate(name, {
    ...data,
    [name]: value
  })
