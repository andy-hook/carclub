import React from 'react'
import Grid from './components/Grid/Grid'
import LayoutGutter from './components/Layout/LayoutGutter'
import LayoutLimiter from './components/Layout/LayoutLimiter'
import { ViewportProvider } from './hooks/useViewport/useViewport'
import GlobalStyle from './style/globalStyle'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import { ImageDataProvider } from './hooks/useImageData'
import Detail from './components/Detail/Detail'
import { breakpoints } from './style/breakpoints'
import Header from './components/Header/Header'

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyle />
      <ViewportProvider breakpoints={breakpoints}>
        <ImageDataProvider>
          <div
            css={`
              height: 100vh;
              overflow-x: hidden;
              overflow-y: scroll;
            `}
          >
            <Routes />
          </div>
        </ImageDataProvider>
      </ViewportProvider>
    </Router>
  )
}

function Routes(): JSX.Element {
  const location = useLocation()

  return (
    <Switch location={location}>
      <Route path="/:id" children={<Home />} />
      <Route path="/" children={<Home />} />
    </Switch>
  )
}

function Home(): JSX.Element {
  return (
    <>
      <Detail />
      <Header />
      <main
        css={`
          position: relative;
          padding-top: 70px;
          padding-bottom: 70px;
          z-index: 1;
        `}
      >
        <LayoutGutter>
          <LayoutLimiter>
            <Grid />
          </LayoutLimiter>
        </LayoutGutter>
      </main>
    </>
  )
}

export default App
