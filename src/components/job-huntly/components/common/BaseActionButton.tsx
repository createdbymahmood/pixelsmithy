import type {ActionIconProps} from '@mantine/core'
import {ActionIcon, Box, rem} from '@mantine/core'
import type {Icon} from '@phosphor-icons/react'
import {get} from 'lodash-es'
import React from 'react'

type BaseButtonColor = 'primary' | 'white'

export interface BaseActionButtonProps extends ActionIconProps {
  color?: BaseButtonColor
  icon: Icon
}

const actionIconColorsMap: Record<BaseButtonColor, ActionIconProps> = {
  primary: {
    c: 'primary',
    color: 'primary.1',
    bg: 'white',
  },
  white: {
    c: 'white',
    color: 'white',
  },
}

export function BaseActionButton({
  color = 'primary',
  icon,
  ...props
}: BaseActionButtonProps) {
  const colorProps = get(actionIconColorsMap, color)

  return (
    <ActionIcon size={rem(40)} variant='outline' {...colorProps} {...props}>
      <Box className='icon-size-lg' component={icon} />
    </ActionIcon>
  )
}
