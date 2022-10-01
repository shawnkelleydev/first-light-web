import { useEffect, useState } from 'react'

const useScrollDirection = () => {
  const [currentY, setCurrentY] = useState(0)
  const [previousY, setPreviousY] = useState(0)

  const [isScrollDown, setIsScrollDown] = useState(false)

  useEffect(() => {
    const cb = () => {
      const y = window.scrollY
      setCurrentY(y)

      setTimeout(() => setPreviousY(y), 500)
    }

    document.addEventListener('scroll', cb)

    return () => document.removeEventListener('scroll', cb)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')

    const isPageTop = currentY < 10
    const isPageBottom = body.scrollHeight < window.innerHeight + currentY + 10

    const isScrollingUp = currentY < previousY
    const isScrollingDown = currentY > previousY

    switch (true) {
      case isPageTop:
        setIsScrollDown(false)
        break
      case isPageBottom:
        setIsScrollDown(true)
        break
      case isScrollingDown:
        setIsScrollDown(true)
        break
      case isScrollingUp:
        setIsScrollDown(false)
    }
  }, [currentY, previousY])

  return isScrollDown
}

export default useScrollDirection
