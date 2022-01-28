import React from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Button from '@/components/atoms/Button'
import H1 from '@/components/atoms/texts/H1'
import H2 from '@/components/atoms/texts/H2'
import H3 from '@/components/atoms/texts/H3'
import H4 from '@/components/atoms/texts/H4'
import * as style from './stylesheet'

const Right: React.FC = () => {
  const { width } = useWindowDimensions()
  const navigate = useNavigate()

  return (
    <div className={style.right}>
      <div className={style.textArea}>
        {width <= 520
          ? (
          <>
            <H2>Esta página não está disponível</H2>
            <H4>
              O link que você acessou pode estar quebrado ou a página pode ter
              sido removida.
            </H4>
          </>
            )
          : (
          <>
            <H1>Esta página não está disponível</H1>
            <H3>
              O link que você acessou pode estar quebrado ou a página pode ter
              sido removida.
            </H3>
          </>
            )}
      </div>

      <div className={style.buttonArea}>
        <Button style={{ size: 'lg' }} onClick={() => navigate('/')}>
          Home
        </Button>
      </div>
    </div>
  )
}

export default Right
