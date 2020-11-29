import 'styled-components'
import { CSSProp } from 'styled-components'

// Declare type of "css" prop on elements
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
