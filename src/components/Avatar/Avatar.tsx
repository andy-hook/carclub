import React from 'react'
import Picture from '../Picture/Picture'

type Size = 'small' | 'regular' | 'large'

type AvatarProps = {
  imageUrl: string
  altText: string
  size?: Size
}

const DIMENSIONS: Record<Size, number> = {
  small: 34,
  regular: 64,
  large: 100,
}

function Avatar({
  imageUrl,
  altText,
  size = 'regular',
  ...props
}: AvatarProps): JSX.Element {
  const dimension = DIMENSIONS[size]

  return (
    <div
      css={`
        overflow: hidden;
        border-radius: 100%;
        background-color: #e8eaed;
        width: ${dimension}px;
        height: ${dimension}px;
      `}
      {...props}
    >
      <Picture
        url={imageUrl}
        altText={altText}
        imageWidth={300}
        imageHeight={300}
      />
    </div>
  )
}

export default Avatar
