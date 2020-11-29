import React, { useEffect, useState, ReactNode, useCallback } from 'react'
import { Image } from '../types'
import { useMounted } from './useMounted'

type Images = Image[] | null

type ProviderProps = {
  children: ReactNode
}

const ImageDataContext = React.createContext<Images | null>(null)

function ImageDataProvider({ children }: ProviderProps): JSX.Element {
  const [images, setImages] = useState<Images>(null)
  const mounted = useMounted()

  useEffect(() => {
    fetch(`/images`)
      .then((res) => res.json())
      .then((data) => {
        // Avoid async setState attempts if unmounted
        if (mounted()) {
          setImages(data)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [mounted])

  return (
    <ImageDataContext.Provider value={images}>
      {children}
    </ImageDataContext.Provider>
  )
}

function useImageData(): {
  images: Images
  getImage: (id: string) => Image | null
} {
  const images = React.useContext(ImageDataContext)

  const getImage = useCallback(
    (id: string): Image | null => {
      return (images && images.find((image) => image.id === id)) || null
    },
    [images]
  )

  return { images, getImage }
}

export { ImageDataProvider, useImageData }
