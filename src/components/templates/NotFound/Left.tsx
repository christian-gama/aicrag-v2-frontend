import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import LogoIcon from '@/components/atoms/icons/LogoIcon'
import * as style from './stylesheet'

const Left: React.FC = () => {
  const { width } = useWindowDimensions()

  return (
    <div className={style.left}>
      <LogoIcon size={width <= 520 ? 'md' : 'lg'} color="white" />
    </div>
  )
}

export default Left
