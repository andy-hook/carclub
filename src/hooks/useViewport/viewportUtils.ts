export type Breakpoints = Record<string, number>

// These breakpoint values represent minimum screen sizes.
export const DEFAULT_BREAKPOINTS: Breakpoints = {
  small: 360,
  medium: 700,
  large: 1200,
}

export function withinBreakpointRange(
  min: string | number,
  max: string | number,
  viewportWidth: number,
  breakpoints: Breakpoints
): boolean {
  const minBreakpoint = breakpoints[min]
  const maxBreakpoint = breakpoints[max]

  // Accept "" or -1 indifferently
  if (min === '') {
    min = -1
  }
  if (max === '') {
    max = -1
  }

  // Get the breakpoint unit value if the name is provided
  if (minBreakpoint) {
    min = minBreakpoint

    if (typeof minBreakpoint !== 'number') {
      throw new Error(`Viewport: invalid minimum value (${min}).`)
    }
  }
  if (maxBreakpoint) {
    max = maxBreakpoint

    if (typeof maxBreakpoint !== 'number') {
      throw new Error(`Viewport: invalid maximum value (${max}).`)
    }
  }

  // Throw when breakpoint name/s don't exist
  if (typeof min === 'string' && !minBreakpoint) {
    throw new Error(`Viewport: minimum breakpoint "${min}" doesn't exist.`)
  }
  if (typeof max === 'string' && !maxBreakpoint) {
    throw new Error(`Viewport: maximum breakpoint "${max}" doesn't exist.`)
  }

  return (
    (min === -1 || viewportWidth >= min) && (max === -1 || viewportWidth < max)
  )
}

export function aboveBreakpoint(
  value: string | number,
  viewportWidth: number,
  breakpoints: Breakpoints
): boolean {
  return withinBreakpointRange(value, -1, viewportWidth, breakpoints)
}

export function belowBreakpoint(
  value: string | number,
  viewportWidth: number,
  breakpoints: Breakpoints
): boolean {
  return withinBreakpointRange(-1, value, viewportWidth, breakpoints)
}
