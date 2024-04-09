import {Pencil} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import type {BaseActionButtonProps} from './BaseActionButton'
import {BaseActionButton} from './BaseActionButton'

export function EditButton(props: Omit<BaseActionButtonProps, 'icon'>) {
  return <BaseActionButton icon={Pencil} {...props} />
}
