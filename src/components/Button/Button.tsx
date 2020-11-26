import React, { ReactNode } from 'react'
import { fontWeight } from '../../style/font'

type ButtonProps = {
  children?: ReactNode
}

function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: 12px 17px;
        line-height: 1;
        font-weight: ${fontWeight.bold};
        border: 2px solid #e7e9ee;
      `}
      type="submit"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
