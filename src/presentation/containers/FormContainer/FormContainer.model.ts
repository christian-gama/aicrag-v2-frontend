import IValidation from '@/domain/validation/validation.model'

type FormContainerProps = {
  validator?: IValidation
  submitHandler: () => Promise<void>
}

export default FormContainerProps
