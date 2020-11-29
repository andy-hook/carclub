import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { springs } from '../../style/springs'
import Loader from '../Loader/Loader'

type PictureProps = {
  url: string
  altText: string
  size?: number
  imageWidth: number
  imageHeight: number
  showLoader?: boolean
}

function getResizedPath(url: string, ext: string, size?: number): string {
  return `/resize?src=${url}.${ext}${size ? `&size=${size}` : ''}`
}

function Picture({
  url,
  size,
  altText,
  imageWidth,
  imageHeight,
  showLoader,
  ...props
}: PictureProps): JSX.Element {
  const [loaded, setLoaded] = useState(false)

  const reserveRatioPercentage = (imageHeight / imageWidth) * 100
  const animatedProps = useSpring({
    opacity: loaded ? 1 : 0,
    config: springs.subtle,
  })

  return (
    <div
      css={`
        position: relative;
        padding-top: ${reserveRatioPercentage}%;
      `}
      {...props}
    >
      {showLoader && !loaded && (
        <div
          css={`
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          `}
        >
          <Loader />
        </div>
      )}

      <animated.picture
        style={animatedProps}
        css={`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        `}
      >
        <source srcSet={getResizedPath(url, 'webp', size)} type="image/webp" />
        <source srcSet={getResizedPath(url, 'jpg', size)} type="image/jpeg" />
        <img
          src={getResizedPath(url, 'jpg', size)}
          alt={altText}
          loading="lazy"
          title={altText}
          css={`
            display: block;
            width: 100%;
          `}
          onLoad={() => setLoaded(true)}
        />
      </animated.picture>
    </div>
  )
}

export default Picture
