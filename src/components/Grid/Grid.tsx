import { tint } from 'polished'
import React, { useMemo } from 'react'
import { animated, Transition } from 'react-spring/renderprops'
import { useImageData } from '../../hooks/useImageData'
import { useViewport } from '../../hooks/useViewport/useViewport'
import { springs } from '../../style/springs'
import Avatar from '../Avatar/Avatar'
import Card from '../Card/Card'

const LAYOUT = {
  small: {
    columns: 1,
    gap: 15,
  },
  medium: {
    columns: 2,
    gap: 20,
  },
  large: {
    columns: 3,
    gap: 30,
  },
}

function Grid(): JSX.Element {
  const { images } = useImageData()
  const { above, within } = useViewport()

  const { columns, gap } = useMemo(() => {
    const { small, medium, large } = LAYOUT

    if (within('medium', 'large')) {
      return medium
    }

    if (above('large')) {
      return large
    }

    return small
  }, [above, within])

  return (
    <>
      <Transition
        native
        items={Boolean(images)}
        from={{
          opacity: 0,
          transform: 'translate3d(0,25px,0)',
        }}
        enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        config={springs.tight}
      >
        {(dataLoaded) => (animProps) => {
          return (
            dataLoaded && (
              <animated.div
                style={animProps}
                css={`
                  columns: ${columns};
                  column-gap: ${gap}px;
                `}
              >
                {images &&
                  images.map(
                    ({
                      id,
                      color,
                      url,
                      width,
                      height,
                      alt_description,
                      user,
                    }) => (
                      <Card
                        key={id}
                        to={`/${id}`}
                        imageUrl={url}
                        imageWidth={width}
                        imageHeight={height}
                        altText={alt_description}
                        color={color}
                        controls={
                          <div
                            css={`
                              display: flex;
                              width: 100%;
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
                                imageUrl={user.profile_image}
                                altText={user.name}
                                size="small"
                                css={`
                                  flex-shrink: 0;
                                `}
                              />
                              <h2
                                css={`
                                  margin-left: 16px;
                                  color: white;
                                `}
                              >
                                {user.name}
                              </h2>
                            </div>
                            <div
                              css={`
                                position: relative;
                                right: 10px;
                                width: 12px;
                                height: 12px;
                                border-radius: 100%;
                                box-shadow: inset 0px 0px 1px 1px
                                  ${tint(0.25, color)};
                                background-color: ${color};
                              `}
                              title={`Colour: ${color}`}
                            />
                          </div>
                        }
                        css={`
                          break-inside: avoid;
                          margin-bottom: ${gap}px;
                        `}
                      />
                    )
                  )}
              </animated.div>
            )
          )
        }}
      </Transition>
    </>
  )
}

export default Grid
