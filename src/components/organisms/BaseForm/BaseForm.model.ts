import IValidation from '@/services/validators/protocols/validation.model'

type FormProps = {
  loading?: boolean
  successMessage?: string
  validator?: IValidation
  submitHandler: () => Promise<void>
}

export default FormProps
