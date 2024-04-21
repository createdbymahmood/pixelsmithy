import {useCallbackRef} from '@radix-ui/react-use-callback-ref'
import {isUndefined} from 'lodash-es'
import * as React from 'react'

interface UseControllableStateParams<T> {
  prop?: T | undefined
  defaultProp?: T | undefined
  onChange?: (state: T) => void
}

type SetStateFn<T> = (prevState?: T) => T

function useControllableState<T>({
  defaultProp,
  onChange,
  prop,
}: UseControllableStateParams<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange,
  })
  const isControlled = prop !== undefined
  const value = isControlled ? prop : uncontrolledProp
  const handleChange = useCallbackRef(onChange)

  React.useEffect(() => {
    if (isControlled && isUndefined(onChange)) {
      const error = new Error()

      const controlWarning = isControlled
        ? 'a controlled value to be uncontrolled'
        : 'an uncontrolled value to be controlled'

      const undefinedWarning = isControlled
        ? 'defined to an undefined'
        : 'undefined to a defined'

      console.error(/** #__DE-INDENT__ */ `
        [${useControllableState.name}]:
        A component is changing ${controlWarning}. This is likely caused by the value changing from ${undefinedWarning} value, which should not happen.
        Decide between using a controlled or uncontrolled input element for the lifetime of the component.
        More info: https://reactjs.org/link/controlled-components
        ${error.stack}
      `)
    }
  }, [isControlled, onChange, value])

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =
    React.useCallback(
      (nextValue) => {
        if (isControlled) {
          const setter = nextValue as SetStateFn<T>
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const value =
            typeof nextValue === 'function' ? setter(prop) : nextValue

          if (value !== prop) handleChange(value as T)
        } else {
          setUncontrolledProp(nextValue)
        }
      },
      [isControlled, prop, setUncontrolledProp, handleChange],
    )

  return [value, setValue] as const
}

function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, 'prop'>) {
  const uncontrolledState = React.useState<T | undefined>(defaultProp)
  const [value] = uncontrolledState
  const prevValueRef = React.useRef(value)
  const handleChange = useCallbackRef(onChange)

  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value as T)
      prevValueRef.current = value
    }
  }, [value, prevValueRef, handleChange])

  return uncontrolledState
}

export {useControllableState}
