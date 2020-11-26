import React from 'react'
import styled, { keyframes } from 'styled-components'

const ellipsis1 = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const ellipsis2 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(24px, 0);
  }
`

const ellipsis3 = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`

function Loader(): JSX.Element {
  return (
    <AnimatedLoader>
      <div
        css={`
          left: 8px;
          animation: ${ellipsis1} 0.6s infinite;
        `}
      />
      <div
        css={`
          left: 8px;
          animation: ${ellipsis2} 0.6s infinite;
        `}
      />
      <div
        css={`
          left: 32px;
          animation: ${ellipsis2} 0.6s infinite;
        `}
      />
      <div
        css={`
          left: 56px;
          animation: ${ellipsis3} 0.6s infinite;
        `}
      />
    </AnimatedLoader>
  )
}

const AnimatedLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #8c929e;
    animation-timing-function: ease;
  }
`

export default Loader
