import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as classes from './stylesheet'
import { sideBarIconWidthVars } from './stylesheet'

type SideBarIconProps = {
  name: 'newTask' | 'account' | 'invoice' | 'format-text'
}

export const SideBarIcon: React.FC<SideBarIconProps> = ({ name }) => {
  const width = name === 'invoice' ? '1.2rem' : '1.6rem'
  let path = null
  let viewBox = '0 0 48 48'

  switch (name) {
    case 'invoice':
      viewBox = '0 0 27 48'
      path = (
        <path
          d="M20.887,24.127a38.485,38.485,0,0,1,4.541,1.5,23.247,23.247,0,0,1,3.8,2.061A8.9,8.9,0,0,1,32.271,31a10.048,10.048,0,0,1,1.056,4.749,8.339,8.339,0,0,1-2.551,6.312A12.765,12.765,0,0,1,24,45.25V51H16.033V45.25a13.424,13.424,0,0,1-6.781-3.5A9.937,9.937,0,0,1,6.327,35h5.847q.5,5.624,7.838,5.624,3.856,0,5.536-1.437a4.269,4.269,0,0,0,1.68-3.312q0-4.5-7.962-6.5Q6.823,26.5,6.823,18.372a8.351,8.351,0,0,1,2.612-6.187,13.233,13.233,0,0,1,6.593-3.437V3H23.99V8.874a11.027,11.027,0,0,1,6.282,3.749A10.591,10.591,0,0,1,32.573,19H26.726q-.249-5.624-6.717-5.624a8.712,8.712,0,0,0-5.162,1.376,4.26,4.26,0,0,0-1.93,3.624q0,3.624,7.962,5.749Z"
          transform="translate(-6.327 -2.999)"
        />
      )
      break

    case 'newTask':
      path = <path d="M48,18H30V0H18V18H0V30H18V48H30V30H48Z" />
      break

    case 'account':
      path = (
        <path d="M24,27A13.5,13.5,0,1,0,10.5,13.5,13.5,13.5,0,0,0,24,27Zm12,3H30.834a16.32,16.32,0,0,1-13.669,0H12A12,12,0,0,0,0,42v1.5A4.5,4.5,0,0,0,4.5,48h39A4.5,4.5,0,0,0,48,43.5V42A12,12,0,0,0,36,30Z" />
      )
      break

    case 'format-text':
      viewBox = '0 0 16 16'
      path = (
        <path d="M 12.03125 2.023438 C 11.535156 2.023438 11.066406 2.269531 10.675781 2.65625 L 2.5625 10.726563 L 1.207031 14.785156 L 5.265625 13.433594 L 5.351563 13.351563 L 13.386719 5.367188 C 13.773438 4.976563 14.015625 4.507813 14.015625 4.011719 C 14.015625 3.515625 13.773438 3.046875 13.386719 2.65625 C 12.996094 2.269531 12.527344 2.023438 12.03125 2.023438 Z M 10.027344 4.710938 L 11.320313 6.007813 L 4.726563 12.5625 L 2.789063 13.207031 L 3.4375 11.265625 Z"/>
      )
      break
  }

  return (
    <div className={classes.sideBarIconWrapper} data-testid="account-icon">
      <svg
        style={assignInlineVars(sideBarIconWidthVars, { width })}
        xmlns="http://www.w3.org/2000/svg"
        className={classes.sideBarIcon}
        viewBox={viewBox}
      >
        {path}
      </svg>
    </div>
  )
}
