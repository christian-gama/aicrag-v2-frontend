import IValidation from '@/domain/validation/validation.model'

type FormProps = {
  loading?: boolean
  successMessage?: string
  validator?: IValidation
  submitHandler: () => Promise<void>
}

export default FormProps
