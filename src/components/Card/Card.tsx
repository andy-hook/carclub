import React, { ReactNode, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { springs } from '../../style/springs'
import Picture from '../Picture/Picture'

type CardProps = {
  imageUrl: string
  imageWidth: number
  imageHeight: number
  controls: ReactNode
  altText: string
  color: string
  to: string
}

function Card({
  imageUrl,
  imageWidth,
  imageHeight,
  controls,
  altText,
  color,
  to,
  ...props
}: CardProps): JSX.Element {
  const [hovering, setHovering] = useState(false)

  const animatedScrim = useSpring({
    opacity: hovering ? 1 : 0,
    config: springs.tight,
  })
  const animatedControls = useSpring({
    transform: hovering ? `translate3d(0,0,0)` : `translate3d(0,15%,0)`,
    opacity: hovering ? 1 : 0,
    config: springs.tight,
  })

  const handleMouseOver = useCallback(() => {
    setHovering(true)
    console.log('enter')
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovering(false)
    console.log('leave')
  }, [])

  return (
    <Link
      to={to}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      css={`
        display: block;
        cursor: zoom-in;
      `}
      {...props}
    >
      <div
        css={`
          position: relative;
          overflow: hidden;
          border-radius: 6px;
        `}
      >
        <animated.div
          style={animatedScrim}
          css={`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: flex-end;
            z-index: 2;
            box-shadow: inset 0px 0px 250px 45px rgba(0, 0, 0, 0.75);
          `}
        >
          <animated.div
            style={animatedControls}
            css={`
              padding: 24px;
              width: 100%;
            `}
          >
            {controls}
          </animated.div>
        </animated.div>
        <div>
          <Picture
            url={imageUrl}
            altText={altText}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            css={`
              position: relative;
              background-color: ${color};
              z-index: 1;
            `}
          />
        </div>
      </div>
    </Link>
  )
}

export default Card
