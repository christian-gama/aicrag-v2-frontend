import IValidation from '@/domain/validation/validation.model'

type FormProps = {
  validation?: IValidation
  submitHandler: () => Promise<void>
}

export default FormProps
