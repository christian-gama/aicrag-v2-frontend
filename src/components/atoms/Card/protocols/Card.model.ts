import { CardVariants } from '../stylesheet/Card.css'

type CardProps = {
  centered?: CardVariants['centered']
  roundness?: CardVariants['roundness']
  transparent?: CardVariants['transparent']
  style?: {
    width?: string
    height?: string
    padding?: string
    margin?: string
  }
}

export default CardProps
