import React, { useState } from 'react'
import { fontWeight } from '../../style/font'

type InputProps = {
  required?: boolean
  id: string
}
const MIN = 1000
const MAX = 120000
const INITIAL_VALUE = MAX / 2 + MIN / 2

function Range({ required = false, id }: InputProps): JSX.Element {
  const [value, setValue] = useState(INITIAL_VALUE)

  return (
    <>
      <input
        type="range"
        required={required}
        id={id}
        min={MIN}
        max={MAX}
        step="1000"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        css={`
          width: 100%;
          margin-bottom: 10px;
        `}
      />
      <p
        css={`
          font-variant-numeric: tabular-nums;
          margin-right: 15px;
          width: 60px;
          font-weight: ${fontWeight.medium};
          color: #464649;
        `}
      >
        £{value}
      </p>
    </>
  )
}

export default Range
