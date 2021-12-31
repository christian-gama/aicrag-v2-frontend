import { FormProperties, FormStates } from '../protocols/form.model'

const findForm = (forms: FormStates['forms'], name: FormProperties['name']) => {
  return forms.find((form) => form.name === name)
}

export default findForm
