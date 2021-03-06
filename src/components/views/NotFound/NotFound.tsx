import { Left } from '@/components/templates/NotFound/Left'
import { Right } from '@/components/templates/NotFound/Right'
import { Wrapper } from '@/components/templates/NotFound/Wrapper'

export const NotFound: React.FC = () => {
  return (
    <div data-testid="not-found">
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
    </div>
  )
}
