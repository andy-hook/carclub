import React, {
  useCallback,
  MutableRefObject,
  useEffect,
  ReactNode,
} from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import { springs } from '../../style/springs'
import { Image } from '../../types'
import { rgba } from 'polished'
import { shadowDepth } from '../../style/shadow'
import IconClose from '../Icon/IconClose'

const AnimatedDiv = animated.div

const SPACE_AROUND = 30
const KEY_ESC = 27

type ModalProps = {
  imageData?: Image | null
  onClose: () => void
  children: (imageData: Image) => ReactNode
}

function Modal({ imageData, onClose, children }: ModalProps): JSX.Element {
  const innerModalContainer = React.useRef() as MutableRefObject<HTMLDivElement>

  const handleClickOutside = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (
        event.target &&
        !innerModalContainer.current.contains(event.target as Node)
      ) {
        onClose()
      }
    },
    [innerModalContainer, onClose]
  )

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === KEY_ESC) {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, true)

    return () => {
      document.removeEventListener('keydown', handleEscape, true)
    }
  }, [handleEscape])

  return (
    <Transition
      native
      items={imageData}
      from={{
        opacity: 0,
        transform: 'translate3d(0,100px,0) scale3d(1.02,1.02,1)',
      }}
      config={springs.tight}
      enter={{ opacity: 1, transform: 'translate3d(0,0,0) scale3d(1,1,1)' }}
      leave={{
        opacity: 0,
        transform: 'translate3d(0,20px,0) scale3d(0.99,0.99,1)',
      }}
    >
      {(currentImage) => ({ opacity, transform }) => {
        return (
          currentImage && (
            <AnimatedDiv
              style={{ opacity }}
              css={`
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow-y: auto;
                overflow-x: hidden;
                box-shadow: ${shadowDepth.overlay};
                background-color: ${rgba('#333537', 0.8)};
                z-index: 2;
              `}
              onClick={handleClickOutside}
            >
              <button
                onClick={onClose}
                css={`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  top: 20px;
                  right: 20px;
                  width: 40px;
                  height: 40px;
                  font-size: 20px;
                  color: white;

                  z-index: 2;
                `}
              >
                <IconClose />
              </button>
              <div
                css={`
                  position: relative;
                  display: flex;
                  flex-direction: column;

                  height: 100%;
                  z-index: 1;
                `}
                style={{
                  pointerEvents: currentImage ? 'auto' : 'none',
                }}
              >
                <div
                  css={`
                    padding: ${SPACE_AROUND}px;
                    padding-top: 60px;
                    max-width: 1650px;
                    width: 100%;
                    margin: auto;
                  `}
                >
                  <AnimatedDiv
                    role="dialog"
                    ref={innerModalContainer}
                    css={`
                      position: relative;
                      overflow: hidden;
                      min-width: ${360 - SPACE_AROUND * 2}px;
                      background-color: white;
                      border-radius: 12px;
                      padding: 35px;
                    `}
                    style={{
                      transform,
                    }}
                  >
                    <div
                      css={`
                        position: relative;
                      `}
                    >
                      {children(currentImage)}
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
            </AnimatedDiv>
          )
        )
      }}
    </Transition>
  )
}

export default Modal
