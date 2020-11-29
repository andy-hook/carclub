import React from 'react'
import { fontWeight } from '../../style/font'
import { shadowDepth } from '../../style/shadow'

type InputType = 'text' | 'email' | 'date'

type InputProps = {
  type?: InputType
  required?: boolean
  placeholder?: string
  id: string
}

function Input({
  type = 'text',
  required = false,
  id,
  placeholder,
}: InputProps): JSX.Element {
  return (
    <input
      placeholder={placeholder}
      type={type}
      required={required}
      id={id}
      css={`
        padding: 12px;
        border-radius: 4px;
        width: 100%;
        border: 0;
        box-shadow: ${shadowDepth.low};
        font-weight: ${fontWeight.medium};
      `}
    />
  )
}

export default Input
