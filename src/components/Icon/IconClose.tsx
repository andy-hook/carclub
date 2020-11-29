import React from 'react'

function IconClose({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  return (
    <svg
      css={`
        width: 1em;
        height: 1em;
        fill: currentColor;
        display: block;
      `}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20.54,20.48a2,2,0,0,1-2.82,0l-5.63-5.63L6.46,20.48a2,2,0,1,1-2.82-2.81L9.27,12,3.64,6.41A2,2,0,0,1,6.46,3.59l5.63,5.63,5.63-5.63a2,2,0,0,1,2.82,2.82L14.91,12l5.63,5.63A2,2,0,0,1,20.54,20.48Z" />
    </svg>
  )
}

export default IconClose
