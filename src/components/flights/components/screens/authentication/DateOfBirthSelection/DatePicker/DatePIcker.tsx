import './DatePicker.scss'

import dayjs from 'dayjs'
import type {KeenSliderOptions, TrackDetails} from 'keen-slider/react'
import {useKeenSlider} from 'keen-slider/react'
import React, {useRef} from 'react'

interface WheelProps {
  loop: boolean
  length: number
  width: number
  perspective?: 'center' | 'left' | 'right'
  initIdx?: number
  label?: string
  setValue?: (_relative: unknown, amount: number) => string
  startIndex?: number
}

function formateDate(_relative: unknown, amount: number) {
  return dayjs().set('month', amount).format('MMM')
}

function Wheel(props: WheelProps) {
  const startIndex = props.startIndex || 0
  const perspective = props.perspective || 'center'
  const wheelSize = 20
  const slides = props.length
  const slideDegree = 360 / wheelSize
  const slidesPerView = props.loop ? 9 : 1
  const [sliderState, setSliderState] = React.useState<TrackDetails | null>(
    null,
  )
  const size = useRef(0)
  const options = useRef<KeenSliderOptions>({
    slides: {
      number: slides,
      origin: props.loop ? 'center' : 'auto',
      perView: slidesPerView,
    },

    vertical: true,

    initial: props.initIdx || 0,
    loop: props.loop,
    dragSpeed: (val) => {
      const height = size.current
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      )
    },
    created: (s) => {
      size.current = s.size
    },
    updated: (s) => {
      size.current = s.size
    },
    detailsChanged: (s) => {
      setSliderState(s.track.details)
    },
    rubberband: !props.loop,
    mode: 'free-snap',
  })

  const [sliderRef, slider] = useKeenSlider(options.current)

  const [radius, setRadius] = React.useState(0)

  React.useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2)
  }, [slider])

  function slideValues() {
    if (!sliderState) return []
    const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0

    const values = []

    // eslint-disable-next-line fp/no-loops, fp/no-let
    for (let i = startIndex; i < slides; i++) {
      const distance = sliderState
        ? (sliderState.slides[i].distance - offset) * slidesPerView
        : 0
      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      }
      const value = props.setValue
        ? props.setValue(i, sliderState.abs + Math.round(distance))
        : i

      values.push({style, value})
    }

    return values
  }

  return (
    <div
      ref={sliderRef}
      className={`wheel keen-slider wheel--perspective-${perspective}`}
    >
      <div
        className='wheel__shadow-top'
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
      <div className='wheel__inner'>
        <div className='wheel__slides' style={{width: `${props.width}px`}}>
          {slideValues().map(({style, value}, idx) => (
            <div key={idx} className='wheel__slide' style={style}>
              <span>{value}</span>
            </div>
          ))}
        </div>
        {props.label ? (
          <div
            className='wheel__label'
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {props.label}
          </div>
        ) : null}
      </div>
      <div
        className='wheel__shadow-bottom'
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </div>
  )
}

export function DatePicker() {
  return (
    <div
      style={{
        height: '240px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // background: 'var(--mantine-color-white)',
        background: 'red',
      }}
    >
      <Wheel
        length={24}
        perspective='right'
        setValue={formateDate}
        width={140}
        loop
      />
      <Wheel length={30} startIndex={1} width={23} loop />
      <Wheel length={60} perspective='left' width={23} loop />
    </div>
  )
}
