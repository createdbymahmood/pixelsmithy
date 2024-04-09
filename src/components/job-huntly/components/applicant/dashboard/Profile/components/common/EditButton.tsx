import type {ActionIconProps} from '@mantine/core'
import {ActionIcon, Box, rem} from '@mantine/core'
import {Pencil} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React from 'react'

type EditButtonColor = 'primary' | 'white'

interface EditButtonProps extends ActionIconProps {
  color?: EditButtonColor
}

const actionIconColorsMap: Record<EditButtonColor, ActionIconProps> = {
  primary: {
    c: 'primary',
    color: 'primary.1',
  },
  white: {
    c: 'white',
    color: 'white',
  },
}

export function EditButton({color = 'primary', ...props}: EditButtonProps) {
  const colorProps = get(actionIconColorsMap, color)

  return (
    <ActionIcon size={rem(40)} variant='outline' {...colorProps} {...props}>
      <Box className='icon-size-lg' component={Pencil} />
    </ActionIcon>
  )
}
