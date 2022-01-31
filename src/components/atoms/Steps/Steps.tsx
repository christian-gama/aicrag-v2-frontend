import { assignInlineVars } from '@vanilla-extract/dynamic'
import { CheckIcon } from '@/components/utils/icons/CheckIcon'
import * as classes from './stylesheet'
import { StepsVariants, stepGapVars } from './stylesheet'

type StepsProps = {
  direction?: StepsVariants['direction']
  gap?: string
  steps: Array<{
    check: StepsVariants['check']
    label: string
  }>
}

export const Steps: React.FC<StepsProps> = ({ gap, direction, steps }) => {
  const isCurrentStep = (step: typeof steps[0], index: number) => {
    const previousStep = steps[index - 1]
    const nextStep = steps[index + 1]

    return !step.check && !!previousStep?.check && !nextStep?.check
  }

  return (
    <div
      style={assignInlineVars(stepGapVars, { gap: gap! })}
      className={classes.stepsRecipe({ direction })}
      data-testid="steps"
    >
      {steps.map((step, index) => (
        <div
          className={classes.stepItemRecipe({
            current: isCurrentStep(step, index),
            check: step.check,
            direction
          })}
          key={index}
        >
          {step.check === true && <CheckIcon color="white" size="sm" />}
          <span className={classes.stepItemLabelRecipe({ direction })}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  )
}

Steps.defaultProps = {
  direction: 'column',
  gap: '6.8rem'
}
