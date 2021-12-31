import IValidation from '@/domain/validation/validation.model'

type FormProps = {
  name: string
  validation?: IValidation
  submitHandler: () => Promise<void>
}

export default FormProps
