import IValidation from '@/services/validators/protocols/validation.model'

type ControlFormProps = {
  loading?: boolean
  successMessage?: string
  validator?: IValidation
  submitHandler: () => Promise<void>
}

export default ControlFormProps
