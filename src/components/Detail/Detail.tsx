import React, { useMemo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useImageData } from '../../hooks/useImageData'
import Modal from '../Modal/Modal'
import { Image } from '../../types'
import Picture from '../Picture/Picture'
import Avatar from '../Avatar/Avatar'
import LayoutLimiter from '../Layout/LayoutLimiter'
import { fontWeight } from '../../style/font'
import Button from '../Button/Button'
import IconHeart from '../Icon/IconHeart'
import Form from '../Form/Form'
import { useViewport } from '../../hooks/useViewport/useViewport'

function Detail(): JSX.Element {
  const { below } = useViewport()
  const history = useHistory()
  const { getImage } = useImageData()
  const { id } = useParams<{ id?: string }>()

  const compactMode = below('medium')

  const imageData = useMemo((): Image | null => {
    return id ? getImage(id) : null
  }, [id, getImage])

  return (
    <Modal imageData={imageData} onClose={() => history.push(`/`)}>
      {({
        color,
        description,
        likes,
        alt_description,
        url,
        width,
        height,
        user,
      }) => {
        const { profile_image, name, location } = user
        const portrait = height > width

        return (
          <article>
            <header
              css={`
                margin-bottom: 30px;
              `}
            >
              <LayoutLimiter
                size="small"
                css={`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                `}
              >
                <div
                  css={`
                    display: flex;
                    align-items: center;
                  `}
                >
                  <Avatar
                    imageUrl={profile_image}
                    altText={name}
                    css={`
                      flex-shrink: 0;
                    `}
                  />
                  <div
                    css={`
                      margin-left: 18px;
                    `}
                  >
                    <h2
                      css={`
                        font-weight: ${fontWeight.bold};
                        font-size: 18px;
                        text-transform: capitalize;
                      `}
                    >
                      {name}
                    </h2>
                    <p
                      css={`
                        margin-top: 5px;
                        color: #5f6265;
                        font-weight: ${fontWeight.medium};
                        text-transform: capitalize;
                      `}
                    >
                      {location}
                    </p>
                  </div>
                </div>
                <Button>
                  <IconHeart
                    css={`
                      opacity: 0.5;
                    `}
                  />
                  {!compactMode && (
                    <span
                      css={`
                        margin-left: 6px;
                      `}
                    >
                      Like
                      <span
                        css={`
                          opacity: 0.6;
                          margin-left: 4px;
                        `}
                      >
                        {likes}
                      </span>
                    </span>
                  )}
                </Button>
              </LayoutLimiter>
            </header>
            <main
              css={`
                max-width: 1400px;
                margin-left: auto;
                margin-right: auto;
              `}
            >
              <figure>
                <div
                  css={`
                    position: relative;
                    overflow: hidden;
                    border-radius: 6px;

                    background-color: #f2f4f6;
                  `}
                >
                  <div
                    css={`
                      max-width: ${portrait ? '800px' : '1400px'};
                      margin-left: auto;
                      margin-right: auto;
                    `}
                  >
                    <Picture
                      url={url}
                      altText={alt_description}
                      imageWidth={width}
                      imageHeight={height}
                      size={2000}
                      showLoader
                    />
                  </div>
                </div>
                {description && (
                  <figcaption
                    css={`
                      text-align: center;
                      font-weight: ${fontWeight.medium};
                      font-size: 20px;
                      margin: auto;
                      margin-top: 34px;
                      line-height: 1.5;
                      max-width: 50em;
                    `}
                  >
                    {description}
                  </figcaption>
                )}
              </figure>
              <section>
                <LayoutLimiter size="small">
                  <div
                    css={`
                      display: flex;
                      padding-top: 90px;
                      padding-bottom: 26px;
                      align-items: center;
                    `}
                  >
                    <hr
                      css={`
                        flex: 1;
                        border: 1px solid #dfe0e4;
                      `}
                    />
                    <Avatar
                      imageUrl={profile_image}
                      altText={name}
                      size={compactMode ? 'regular' : 'large'}
                      css={`
                        flex-shrink: 0;
                        margin-left: 30px;
                        margin-right: 30px;
                      `}
                    />
                    <hr
                      css={`
                        flex: 1;
                        border: 1px solid #dfe0e4;
                      `}
                    />
                  </div>
                  <h1
                    css={`
                      font-size: 20px;
                      text-transform: capitalize;
                      margin-bottom: 8px;
                      text-align: center;
                    `}
                  >
                    {name}
                  </h1>
                  <p
                    css={`
                      font-size: 18px;
                      font-weight: ${fontWeight.medium};
                      color: #5f6265;
                      text-align: center;
                    `}
                  >
                    Tell me about yourself
                  </p>
                  <Form
                    initialColor={color}
                    css={`
                      margin-top: 60px;
                      max-width: 600px;
                      margin-left: auto;
                      margin-right: auto;
                    `}
                  />
                </LayoutLimiter>
              </section>
            </main>
          </article>
        )
      }}
    </Modal>
  )
}

export default Detail
