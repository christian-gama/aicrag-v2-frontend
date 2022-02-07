import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as classes from './stylesheet'
import { loadingSkeletonVars } from './stylesheet'

type LoadingSkeletonProps = {
  marginBottom?: string
  marginTop?: string
  columns: number
  width?: string
  amount: number
  gap?: string
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  marginBottom,
  marginTop,
  columns,
  width,
  gap,
  amount
}) => {
  return (
    <div
      className={classes.loadingSkeleton}
      data-testid="loading-skeleton"
      style={assignInlineVars(loadingSkeletonVars, {
        columns: `repeat(${columns}, 1fr)`,
        marginBottom: marginBottom!,
        marginTop: marginTop!,
        width: width!,
        gap: gap!
      })}
    >
      {Array.from({ length: amount }).map((_, rowIndex) => (
        <div key={rowIndex} className={classes.loadingSkeletonColumn} />
      ))}
    </div>
  )
}

LoadingSkeleton.defaultProps = {
  width: '100%',
  marginTop: '0',
  marginBottom: '0',
  gap: '2.8rem'
}
