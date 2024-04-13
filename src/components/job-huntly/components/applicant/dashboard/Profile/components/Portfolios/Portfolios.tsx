import {AddButton, ProfileSection} from '@job-huntly/components/common'
import type {Embla} from '@mantine/carousel'
import {Carousel} from '@mantine/carousel'
import {Progress, rem, Skeleton, Stack, Text} from '@mantine/core'
import React, {useCallback, useEffect, useState} from 'react'

const portfolios = [
  'Clinically - clinic & health care website',
  'Growthly - SaaS Analytics & Sales Website',
  'Planna - Project Management App',
  'Funiro - Landing Page for furniture shop',
  'Roscent - Admin Dashboard for every project',
  'Dash Stack - Admin Dahsboard UI Kit',
]

interface PortfolioCarouselSlideProps {
  title: string
}

function PortfolioCarouselSlide(props: PortfolioCarouselSlideProps) {
  return (
    <Carousel.Slide>
      <Stack>
        <Skeleton h={rem(162.3)} />
        <Text>{props.title}</Text>
      </Stack>
    </Carousel.Slide>
  )
}

function usePortfoliosCarouselState() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [embla, setEmbla] = useState<Embla | null>(null)

  const handleScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll)
      handleScroll()
    }
  }, [embla])

  return {setEmbla, scrollProgress}
}

function PortfoliosCarousel() {
  const state = usePortfoliosCarouselState()
  const slides = portfolios.map((portfolio) => {
    return <PortfolioCarouselSlide key={portfolio} title={portfolio} />
  })
  return (
    <Stack>
      <Carousel
        align='start'
        containScroll='trimSnaps'
        getEmblaApi={state.setEmbla}
        slideGap='md'
        slideSize='30%'
        withControls={false}
      >
        {slides}
      </Carousel>

      <Progress size='sm' value={state.scrollProgress} />
    </Stack>
  )
}

export function Portfolios() {
  return (
    <ProfileSection action={<AddButton />} title='Portfolios'>
      <PortfoliosCarousel />
    </ProfileSection>
  )
}
