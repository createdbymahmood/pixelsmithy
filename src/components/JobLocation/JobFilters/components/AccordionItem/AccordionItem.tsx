import {Accordion as OriginalAccordion, Title} from '@mantine/core'
import type {ReactNode} from 'react'

import styles from './AccordionItem.module.scss'

interface AccordionItemProps {
  title: string
  _key: string
  children: ReactNode
}

export function AccordionItem({children, _key, title}: AccordionItemProps) {
  return (
    <OriginalAccordion.Item classNames={{item: styles.item}} value={_key}>
      <OriginalAccordion.Control
        classNames={{control: styles.control, chevron: styles.chevron}}
      >
        <Title order={4} variant='text'>
          {title}
        </Title>
      </OriginalAccordion.Control>
      {children}
    </OriginalAccordion.Item>
  )
}
