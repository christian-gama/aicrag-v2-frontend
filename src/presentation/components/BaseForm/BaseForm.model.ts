import IValidation from '@/domain/validation/validation.model'

type FormProps = {
  validator?: IValidation
  submitHandler: () => Promise<void>
}

export default FormProps
