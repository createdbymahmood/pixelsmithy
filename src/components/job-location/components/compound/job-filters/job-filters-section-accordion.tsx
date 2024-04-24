'use client'

import type {AccordionProps} from '@job-location/components/ui/accordion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@job-location/components/ui/accordion'
import {cn} from '@job-location/utils/cn'
import * as React from 'react'

const SectionAccordion: React.FC<AccordionProps> = ({className, ...props}) => {
  return <Accordion className={cn(className)} {...props} />
}

const SectionAccordionItem: React.FC<
  React.ComponentPropsWithoutRef<typeof AccordionItem>
> = ({className, ...props}) => (
  <AccordionItem className={cn('border-none', className)} {...props} />
)

const SectionAccordionTrigger: React.FC<
  React.ComponentPropsWithoutRef<typeof AccordionTrigger>
> = ({children, className, ...props}) => (
  <AccordionTrigger
    className='py-5 font-serif font-semibold hover:no-underline'
    {...props}
  >
    <p className={cn('line-clamp-1 text-left', className)}>{children}</p>
  </AccordionTrigger>
)

const SectionAccordionContent: React.FC<
  React.ComponentPropsWithoutRef<typeof AccordionContent>
> = ({children, className, ...props}) => (
  <AccordionContent {...props} className={cn('pt-0 pb-2', className)}>
    {children}
  </AccordionContent>
)

export {
  SectionAccordion,
  SectionAccordionContent,
  SectionAccordionItem,
  SectionAccordionTrigger,
}
