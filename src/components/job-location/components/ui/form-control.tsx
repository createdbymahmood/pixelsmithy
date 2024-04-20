import * as React from 'react'

import {Stack} from './stack'

export interface FormControlProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  label?: string
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({className, label, ...props}, ref) => {
    return <Stack ref={ref} className={className} gap='xs' {...props} />
  },
)

FormControl.displayName = 'FormControl'

export {FormControl}
