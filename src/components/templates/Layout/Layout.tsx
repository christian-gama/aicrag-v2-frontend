import { useWindowDimensions } from '@/components/_hooks'
import { Background } from '@/components/atoms/Background'
import { Card } from '@/components/atoms/Card'
import { Header } from '@/components/organisms/Header'
import { SideBar } from '@/components/organisms/SideBar'
import * as classes from './stylesheet'

type LayoutProps = {
  backHandler?: () => void
  pageName: string
}

export const Layout: React.FC<LayoutProps> = ({
  backHandler,
  pageName,
  children
}) => {
  const { width } = useWindowDimensions()

  return (
    <Background>
      <div className={classes.layout} data-testid="layout">
        <SideBar />
        <Header pageName={pageName} backHandler={backHandler} />
        <div className={classes.layoutCard}>
          <Card
            roundness={width <= 1024 ? 'none' : 'md'}
            style={{ width: '100%', height: '100%' }}
          >
            {children}
          </Card>
        </div>
      </div>
    </Background>
  )
}
