import type {TextareaProps} from '@mantine/core'
import {Textarea} from '@mantine/core'

interface DescriptionInputProps extends TextareaProps {}

export function DescriptionInput(props: DescriptionInputProps) {
  const MAX_LENGTH = 500

  return (
    <Textarea
      description={`Maximum ${MAX_LENGTH} characters`}
      maxLength={MAX_LENGTH}
      rows={7}
      size='md'
      {...props}
    />
  )
}
