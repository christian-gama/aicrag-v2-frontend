import { useEffect, useState } from 'react'

function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height
  }
}

const useWindowDimensions = () => {
  const [width, setWidth] = useState(getWindowDimensions().width)
  const [height, setHeight] = useState(getWindowDimensions().height)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const handleResize = () => {
      clearTimeout(timer)

      timer = setTimeout(() => {
        setWidth(getWindowDimensions().width)
        setHeight(getWindowDimensions().height)
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,
    height
  }
}

export default useWindowDimensions
