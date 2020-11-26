import React, { ReactNode } from 'react'

type FieldProps = {
  children: ReactNode
  label: ReactNode
  required?: boolean
}

function Field({
  children,
  label,
  required = false,
  ...props
}: FieldProps): JSX.Element {
  return (
    <label
      css={`
        display: block;
      `}
      {...props}
    >
      <h3
        css={`
          margin-bottom: 10px;
        `}
      >
        {label}
        {required && (
          <span
            css={`
              opacity: 0.5;
            `}
          >
            {' '}
            *
          </span>
        )}
      </h3>
      {children}
    </label>
  )
}

export default Field
