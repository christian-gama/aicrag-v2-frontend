import * as classes from './stylesheet'
import { SettingsIconVariants } from './stylesheet'

type SettingsIconProps = {
  color?: SettingsIconVariants['color']
}

export const SettingsIcon: React.FC<SettingsIconProps> = ({ color }) => {
  return (
    <div
      className={classes.settingsIconWrapperRecipe({
        color
      })}
      data-testid="settings-icon"
    >
      <svg
        className={classes.settingsIconRecipe({
          color
        })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          d="M48.538,28.494A6.175,6.175,0,0,1,52.5,22.733,24.473,24.473,0,0,0,49.537,15.6a6.261,6.261,0,0,1-2.512.537,6.162,6.162,0,0,1-5.638-8.673A24.412,24.412,0,0,0,34.262,4.5a6.172,6.172,0,0,1-11.525,0A24.486,24.486,0,0,0,15.6,7.462a6.162,6.162,0,0,1-5.637,8.673A6.057,6.057,0,0,1,7.45,15.6,25.014,25.014,0,0,0,4.5,22.745a6.173,6.173,0,0,1,.012,11.522A24.473,24.473,0,0,0,7.475,41.4a6.165,6.165,0,0,1,8.138,8.135A24.63,24.63,0,0,0,22.75,52.5a6.161,6.161,0,0,1,11.5,0,24.487,24.487,0,0,0,7.137-2.962A6.171,6.171,0,0,1,49.525,41.4a24.616,24.616,0,0,0,2.963-7.136A6.2,6.2,0,0,1,48.538,28.494ZM28.612,38.479a10,10,0,1,1,10-10A10,10,0,0,1,28.612,38.479Z"
          transform="translate(-4.5 -4.5)"
        />
      </svg>
    </div>
  )
}

SettingsIcon.defaultProps = {
  color: 'primary'
}
