import * as classes from './stylesheet'

export const PenIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.penIcon}
      data-testid="pen-icon"
      viewBox="0 0 48 48"
    >
      <path
        d="M50.251,13.749l-4.875,4.875-10-10,4.875-4.875a2.72,2.72,0,0,1,3.749,0L50.251,10A2.543,2.543,0,0,1,51,11.875a2.543,2.543,0,0,1-.749,1.875ZM3,41,32.5,11.5l10,10L13,51H3Z"
        transform="translate(-3 -3)"
      />
    </svg>
  )
}
