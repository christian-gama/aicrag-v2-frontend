import { assignInlineVars } from '@vanilla-extract/dynamic'
import { CheckIcon } from '@/components/utils/icons/CheckIcon'
import * as classes from './stylesheet'
import { StepsVariants, stepGapVars } from './stylesheet'

type StepsProps = {
  direction?: StepsVariants['direction']
  gap?: string
  steps: Array<{ label: string, check: StepsVariants['check'] }>
}

export const Steps: React.FC<StepsProps> = ({ gap, direction, steps }) => {
  return (
    <div
      style={assignInlineVars(stepGapVars, { gap: gap! })}
      className={classes.stepsRecipe({ direction })}
      data-testid="steps"
    >
      {steps.map((step, index) => (
        <div
          className={classes.stepItemRecipe({ check: step.check, direction })}
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
