import * as classes from './stylesheet'

export const TrashIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.trashIcon}
      data-testid="trash-icon"
      viewBox="0 0 37 48"
    >
      <path
        d="M42.015,5.624V11h-37V5.624H14.2L16.934,3H30.1l2.731,2.624Zm-34.391,40v-32H39.409v32a5.167,5.167,0,0,1-1.613,3.75A5.1,5.1,0,0,1,34.071,51H12.964A5.1,5.1,0,0,1,9.24,49.376a5.167,5.167,0,0,1-1.613-3.75Z"
        transform="translate(-5.015 -3)"
      />
    </svg>
  )
}
