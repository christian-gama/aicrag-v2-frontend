import { LogoIconVariants } from './stylesheet'
import * as classes from './stylesheet'

type LogoIconProps = {
  color?: LogoIconVariants['color']
  size?: LogoIconVariants['size']
}

export const LogoIcon: React.FC<LogoIconProps> = ({ color, size }) => {
  const iconStyle = classes.logoIconRecipe({
    color,
    size
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="logo-icon"
      className={iconStyle}
      viewBox="0 0 235 65"
    >
      <g transform="translate(-4.805 -114.279)">
        <g transform="translate(7 5)">
          <path
            d="M19.964-16.359,18.9-19.882H10L8.936-16.359H.594l9.263-25H19.34l9.253,25ZM11.7-25.483h5.5l-2.656-8.9h-.153Zm0,0"
            transform="translate(72.211 176.639)"
          />
          <g transform="translate(105.74 136.479)">
            <g transform="translate(0 0)">
              <path
                transform="translate(-6.982 40.159)"
                d="M5.047-16.359v-25h8v25Zm0,0"
              />
            </g>
          </g>
          <g transform="translate(118.888 143.033)">
            <g transform="translate(0 0)">
              <path
                d="M15.671-42.078q5.561,0,8.793,2.8T27.7-31.3H20.034a5,5,0,0,0-1.143-3.465,4.129,4.129,0,0,0-3.249-1.282,4.164,4.164,0,0,0-3.58,1.538,7.008,7.008,0,0,0-1.143,4.272v2.335a7.039,7.039,0,0,0,1.143,4.253,4.065,4.065,0,0,0,3.5,1.547,4.785,4.785,0,0,0,3.523-1.2,4.613,4.613,0,0,0,1.2-3.4H27.7q0,5.147-3.145,7.888t-8.887,2.734q-6.4,0-9.681-3.284T2.7-29.073q0-6.425,3.287-9.711T15.671-42.078Zm0,0"
                transform="translate(-3.786 34.325)"
              />
            </g>
          </g>
          <g transform="translate(148.352 135.639)">
            <g transform="translate(0 0)">
              <path
                d="M28.71-33.69a7.211,7.211,0,0,1-1.265,4.146,7.286,7.286,0,0,1-3.679,2.72l5.688,10.465H20.241L15.7-25.483H12.661v9.124H4.453v-25H20.087a9.9,9.9,0,0,1,4.7,1.039,7.084,7.084,0,0,1,2.935,2.805A7.691,7.691,0,0,1,28.71-33.69Zm-8.362.331a2.192,2.192,0,0,0-.666-1.634,2.237,2.237,0,0,0-1.632-.661H12.661v4.618h5.388a2.209,2.209,0,0,0,1.632-.671A2.273,2.273,0,0,0,20.347-33.36Zm0,0"
                transform="translate(-5 41)"
              />
            </g>
          </g>
          <g transform="translate(176.023 136.479)">
            <g transform="translate(0 0)">
              <path
                d="M19.964-16.359,18.9-19.882H10L8.936-16.359H.594l9.263-25H19.34l9.253,25ZM11.7-25.483h5.5l-2.656-8.9h-.153Zm0,0"
                transform="translate(-1.813 40.159)"
              />
            </g>
          </g>
          <g transform="translate(206.568 136.033)">
            <g transform="translate(0 0)">
              <path
                d="M16.673-42.078a18.754,18.754,0,0,1,6.622,1.1A10.64,10.64,0,0,1,27.97-37.75a8,8,0,0,1,1.733,5.2H21.842a2.95,2.95,0,0,0-1.413-2.535A5.924,5.924,0,0,0,17-36.05a5.9,5.9,0,0,0-4.4,1.519,5.871,5.871,0,0,0-1.481,4.291v2.335a5.886,5.886,0,0,0,1.481,4.291A5.913,5.913,0,0,0,17-22.106a6.09,6.09,0,0,0,3.427-.93,2.776,2.776,0,0,0,1.413-2.392H16.034v-5.107H29.7v14.02h-4.24L24.64-19a13.818,13.818,0,0,1-9.158,2.924q-6.371,0-9.574-3.265t-3.2-9.73q0-6.4,3.63-9.7T16.673-42.078Zm0,0"
                transform="translate(-3.467 41.325)"
              />
            </g>
          </g>
        </g>
        <path
          d="M65.743,170.967H17.951l19.354-38.705,12.581,25.166H43.829l-6.524-13.054L26.714,165.551H63.036l-25.73-51.457-32.5,65h65Zm0,0"
          transform="translate(0 0.185)"
        />
      </g>
    </svg>
  )
}

LogoIcon.defaultProps = {
  color: 'primary',
  size: 'sm'
}
