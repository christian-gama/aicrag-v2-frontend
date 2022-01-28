import React from 'react'
import Left from '@/components/templates/NotFound/Left'
import Right from '@/components/templates/NotFound/Right'
import Wrapper from '@/components/templates/NotFound/Wrapper'

const NotFound: React.FC = () => {
  return (
    <div data-testid="not-found">
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
    </div>
  )
}

export default NotFound
