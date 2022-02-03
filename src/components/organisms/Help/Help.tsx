import { useState } from 'react'
import { useWindowDimensions } from '@/components/_hooks'
import { Card } from '@/components/atoms/Card'
import { Modal } from '@/components/molecules/Modal'
import { NavHeader } from '@/components/molecules/NavHeader'
import { Center } from '@/components/utils/Center'
import { P } from '@/components/utils/texts/P'
import * as classes from './stylesheet'

type HelpProps = {
  isOpen?: boolean
}

export const Help: React.FC<HelpProps> = ({ isOpen }) => {
  const { width } = useWindowDimensions()
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  const onCloseHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal isOpen={isModalOpen}>
      <Center stickMobile>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div className={classes.help} data-testid="help">
            <div className={classes.helpNavHeaderWrapper}>
              <NavHeader backHandler={onCloseHandler} title="Sobre" />
            </div>

            <div className={classes.helpTextWrapper}>
              <P>
                Salve seus registros de áudios transcritos ou corrigidos e
                usufra de vantagens como: checar o valor a receber no mês, ver a
                quantidade de áudios concluídos em um mês, comparar seu
                desempenho com os meses anteriores, conversão do dólar com a
                cotação atual e entre outras vantagens.
              </P>

              <P margin="2.4rem 0">
                Vale lembrar que, para prezar a confidencialidade do projeto em
                questão, este sistema não tem vínculo e não faz referências a
                nenhum nome ou empresas.
              </P>

              <P margin="2.4rem 0">
                Todas as suas informações são armazenadas com segurança e
                ninguém tem acesso, além de você.
              </P>
            </div>

            <div className={classes.helpFooter}>
              <P>© 2022 Copyright Aicrag. Todos os direitos reservados.</P>
            </div>
          </div>
        </Card>
      </Center>
    </Modal>
  )
}
