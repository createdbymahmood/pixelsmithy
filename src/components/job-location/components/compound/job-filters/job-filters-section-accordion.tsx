'use client'

import {cn} from '@job-location/utils/cn'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {ChevronDown} from 'lucide-react'
import * as React from 'react'

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>

const SectionAccordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({className, ...props}, ref) => {
  return (
    <AccordionPrimitive.Root ref={ref} className={cn(className)} {...props} />
  )
})

const SectionAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({className, ...props}, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))

const SectionAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({children, className, ...props}, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-5 transition-all [&[data-state=open]>svg]:rotate-180 text-lg font-semibold font-serif',
        className,
      )}
      {...props}
    >
      <p className='line-clamp-1 text-left'>{children}</p>
      <ChevronDown className='size-4 shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

const SectionAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({children, className, ...props}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pt-0 pb-2', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

export {
  SectionAccordion,
  SectionAccordionContent,
  SectionAccordionItem,
  SectionAccordionTrigger,
}
