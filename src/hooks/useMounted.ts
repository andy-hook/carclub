import { useEffect, useRef, useCallback } from 'react'

// Simple hook for checking a component is mounted prior to performing async state updates
export function useMounted(): () => boolean {
  const mounted = useRef(true)

  const getMounted = useCallback(() => mounted.current, [])

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  return getMounted
}
