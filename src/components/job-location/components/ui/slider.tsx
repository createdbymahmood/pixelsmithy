'use client'

import {cn} from '@job-location/utils/cn'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import {useControllableState} from '@/hooks/useControllableState'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => {
  const [values = []] = useControllableState({
    prop: props.value,
    defaultProp: props.defaultValue,
    onChange: props.onValueChange,
  })

  const thumbs = values.map((value) => {
    return (
      <SliderPrimitive.Thumb
        key={value}
        className='block size-5 rounded-full border border-gray-400 bg-background shadow-md transition-colors disabled:pointer-events-none disabled:opacity-50'
      />
    )
  })

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'>
        <SliderPrimitive.Range className='absolute h-full bg-primary' />
      </SliderPrimitive.Track>

      {thumbs}
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export {Slider}
