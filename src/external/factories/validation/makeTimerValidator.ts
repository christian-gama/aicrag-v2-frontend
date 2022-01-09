import Builder from '../../builders/validatorBuilder'
import ValidatorComposite from '../../composites/validatorComposite'

const makeTimerValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...Builder.field('hour').required().isNumber().max(23).build(),
    ...Builder.field('minute').required().isNumber().max(59).build()
  ])
}

export default makeTimerValidator
