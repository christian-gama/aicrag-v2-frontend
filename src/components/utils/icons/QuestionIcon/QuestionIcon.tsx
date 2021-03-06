import * as classes from './stylesheet'
import { QuestionIconVariants } from './stylesheet'

type QuestionIconProps = {
  color?: QuestionIconVariants['color']
}

export const QuestionIcon: React.FC<QuestionIconProps> = ({ color }) => {
  return (
    <div
      className={classes.questionIconWrapper({
        color
      })}
    >
      <svg
        className={classes.questionIconRecipe({
          color
        })}
        xmlns="http://www.w3.org/2000/svg"
        data-testid="question-icon"
        viewBox="0 0 33 48"
      >
        <path
          d="M18.344,0C10.859,0,6.011,3.066,2.2,8.534a2.252,2.252,0,0,0,.486,3.082l4.045,3.066a2.251,2.251,0,0,0,3.118-.389c2.349-2.942,4.091-4.636,7.761-4.636,2.885,0,6.453,1.856,6.453,4.653,0,2.114-1.746,3.2-4.594,4.8-3.322,1.862-7.718,4.179-7.718,9.975V30a2.25,2.25,0,0,0,2.251,2.25h6.8A2.25,2.25,0,0,0,23.053,30v-.541c0-4.018,11.747-4.185,11.747-15.059C34.8,6.211,26.3,0,18.344,0ZM17.4,35.012a6.494,6.494,0,1,0,6.5,6.494A6.5,6.5,0,0,0,17.4,35.012Z"
          transform="translate(-1.8)"
        />
      </svg>
    </div>
  )
}

QuestionIcon.defaultProps = {
  color: 'primary'
}
