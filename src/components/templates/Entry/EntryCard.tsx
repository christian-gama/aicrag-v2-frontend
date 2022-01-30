import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useWindowDimensions } from '@/components/_hooks'
import { Background } from '@/components/atoms/Background'
import { Card } from '@/components/atoms/Card'
import { Center } from '@/components/utils/Center'
import * as classes from './stylesheet'

type EntryCardProps = {
  style?: {
    height?: string
  }
}

export const EntryCard: React.FC<EntryCardProps> = ({ style, children }) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <Center stickMobile>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div
            className={classes.entryCard}
            style={assignInlineVars(classes.windowDimensionVars, {
              height:
                width <= 520
                  ? height <= 600
                    ? '600px'
                    : `${height}px`
                  : style!.height!
            })}
          >
            {children}
          </div>
        </Card>
      </Center>
    </Background>
  )
}

EntryCard.defaultProps = {
  style: {
    height: '68rem'
  }
}
