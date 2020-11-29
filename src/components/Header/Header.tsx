import React from 'react'
import { useViewport } from '../../hooks/useViewport/useViewport'
import { fontWeight } from '../../style/font'
import { shadowDepth } from '../../style/shadow'
import IconSearch from '../Icon/IconSearch'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'

function Header(): JSX.Element {
  const { below } = useViewport()

  const compactMode = below('medium')

  return (
    <header>
      <div
        css={`
          border-top: 2px solid #fef200;
          padding-top: 22px;
          padding-bottom: 22px;
          background-color: #0e0e10;
        `}
      >
        <svg
          width="140"
          viewBox="0 0 73.47 14.69"
          css={`
            display: block;
            margin-left: auto;
            margin-right: auto;
            fill: #e5e5e5;
          `}
        >
          <path d="M71,3.67a1.22,1.22,0,1,0,1.22-1.21A1.22,1.22,0,0,0,71,3.67Zm-3.85-1.1H64.6l3.49,6.06L64.6,14.69h2.58l3.48-6.06Zm-5,5.51c0,.74-.6,1.2-1.52,1.2s-1.28-.37-1.28-.92.36-.83,1.19-1l1.61-.19Zm2.15.05V5.42c0-1.29-.18-1.7-.87-2.21A3.86,3.86,0,0,0,61,2.48a6.09,6.09,0,0,0-3.35.92l.92,1.65A5.4,5.4,0,0,1,61,4.32a1.2,1.2,0,0,1,1.1.55c.09.18.09.13.09.69a9.18,9.18,0,0,0-3.86.82,2.26,2.26,0,0,0-1.05,1.93,3,3,0,0,0,3.21,2.76,2.3,2.3,0,0,0,2.07-.92,2,2,0,0,0,1.6.92h.19l.92-1.61c-.74-.18-.88-.37-.88-1.33Zm-35.81.59-.87.14c-.83,0-1.06-.27-1.06-1.33V4.36h1.93V2.57H26.63V0h-2.2V2.57H23.14V4.41h1.29V8.49c0,.92,0,1.29.32,1.61a2.54,2.54,0,0,0,2.07.74,5.28,5.28,0,0,0,1.74-.23ZM31.31,6.8a2.23,2.23,0,1,0,4.46,0,2.23,2.23,0,0,0-2.25-2.35,2.15,2.15,0,0,0-2.21,2.3Zm6.57,0a4.34,4.34,0,0,1-8.68,0,4.34,4.34,0,0,1,8.68,0Zm-21.67,0a2.15,2.15,0,0,0,2.2,2.29A2.18,2.18,0,0,0,20.62,6.8a2.19,2.19,0,0,0-2.21-2.35,2.15,2.15,0,0,0-2.2,2.3Zm6.56,0a4.2,4.2,0,0,1-4.36,4.27A4.2,4.2,0,0,1,14.05,6.8a4.21,4.21,0,0,1,4.36-4.32A4.24,4.24,0,0,1,22.77,6.8Zm32,4H52.16l-1.33-5-1.19,5H47L44.68,2.57H47l1.38,5.6,1.24-5.6H52l1.37,5.6,1.38-5.6H57l-2.29,8.27Zm-15.79,0V2.57H41l.14.92a2.67,2.67,0,0,1,1.93-1,3.08,3.08,0,0,1,.83.09V4.64h-.33a2.36,2.36,0,0,0-1.74.55c-.55.46-.69.83-.69,2v3.68Zm-28.29,0V6.38c0-1.33-.46-1.93-1.47-1.93a1.67,1.67,0,0,0-1.37.74A2.64,2.64,0,0,0,7.48,6.7v4.14H5.33V6.61A3.07,3.07,0,0,0,5.05,5.1a1.41,1.41,0,0,0-1.24-.6c-1.06,0-1.65.69-1.65,2v4.32H0V2.57H2l.14.69a3.28,3.28,0,0,1,2.16-.78A3.25,3.25,0,0,1,6.93,3.72,3.63,3.63,0,0,1,9.69,2.48a3.06,3.06,0,0,1,2.57,1.24A3.22,3.22,0,0,1,12.81,6v4.82Z" />
        </svg>
      </div>
      <LayoutGutter
        css={`
          padding-top: 90px;
          margin-bottom: ${compactMode ? 40 : 80}px;
          background-color: #26282d;
        `}
      >
        <LayoutLimiter>
          <div
            css={`
              text-align: center;
            `}
          >
            <h1
              css={`
                font-size: ${compactMode ? 40 : 56}px;
                font-weight: ${fontWeight.bold};
                color: white;
                margin-bottom: 0.4em;
              `}
            >
              Welcome to the&nbsp;club
            </h1>
            <p
              css={`
                color: #8b8e94;
                margin-bottom: 50px;
                font-size: 26px;
              `}
            >
              View and interact with more than 200,000 enthusiasts
            </p>

            <div
              css={`
                display: flex;
                align-items: center;
                position: relative;
                background-color: white;
                border-radius: 8px;
                box-shadow: ${shadowDepth.medium};
                height: 74px;
                max-width: 550px;
                bottom: -37px;
                margin-left: auto;
                margin-right: auto;
              `}
            >
              <IconSearch
                css={`
                  font-size: 30px;
                  margin-left: 30px;
                  margin-right: 20px;
                  color: #b1b3b9;
                `}
              />
              <span
                css={`
                  font-size: 24px;
                  color: #a2a4a9;
                `}
              >
                Search…
              </span>
            </div>
          </div>
        </LayoutLimiter>
      </LayoutGutter>
    </header>
  )
}

export default Header
