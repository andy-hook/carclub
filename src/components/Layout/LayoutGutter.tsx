import React, { ReactNode } from 'react'
import { useViewport } from '../../hooks/useViewport/useViewport'

type LayoutGutterProps = {
  children?: ReactNode
}

function LayoutGutter({ children, ...props }: LayoutGutterProps): JSX.Element {
  const { below } = useViewport()

  const paddingAmount = below('medium') ? `25px` : '5%'

  return (
    <div
      css={`
        padding-left: ${paddingAmount};
        padding-right: ${paddingAmount};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
