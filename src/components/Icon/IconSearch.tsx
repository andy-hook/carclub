import React from 'react'

function IconSearch({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  return (
    <svg
      css={`
        width: 1em;
        height: 1em;
        fill: currentColor;
      `}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22.29,20.91l-4-4a9.55,9.55,0,1,0-2.05,1.73L20.4,22.8a1.33,1.33,0,0,0,.93.39,1.35,1.35,0,0,0,.94-.39A1.32,1.32,0,0,0,22.29,20.91Zm-18-10.38a6.86,6.86,0,1,1,6.87,6.88A6.88,6.88,0,0,1,4.29,10.53Z" />
    </svg>
  )
}

export default IconSearch
