import React, { useState } from 'react'

type InputProps = {
  required?: boolean
  id: string
  initialColor: string
}

function ColorPicker({
  required = false,
  id,
  initialColor,
}: InputProps): JSX.Element {
  const [value, setValue] = useState(initialColor)

  return (
    <input
      type="color"
      required={required}
      id={id}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      css={`
        padding: 0;
        width: 100%;
        height: 45px;
        border: 0;

        border-radius: 4px;
        overflow: hidden;

        &::-webkit-color-swatch-wrapper {
          padding: 0;
        }

        &::-webkit-color-swatch {
          border: 0;
        }
      `}
    />
  )
}

export default ColorPicker
