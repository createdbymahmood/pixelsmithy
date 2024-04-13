'use client'

import type {MantineSpacing} from '@mantine/core'
import {
  Anchor,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Indicator,
  Paper,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  Buildings,
  Eye,
  Fire,
  Gear,
  MapPin,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import {head} from 'lodash-es'
import React from 'react'

import {EditButton} from '@/components/job-huntly/components/common'
import {companies} from '@/components/job-huntly/mock/companies'

const company = head(companies)!

function HeaderCompanyAvatar() {
  return (
    <Indicator
      color='transparent'
      label={<EditButton color='primary' />}
      offset={40}
      position='top-start'
      size={20}
    >
      <Avatar component={company.logo} radius={0} size={rem(189)} />
    </Indicator>
  )
}

const companyInDetailInfo = [
  {
    label: 'Founded',
    value: 'July 31, 2011',
    icon: Fire,
  },
  {
    label: 'Employees',
    value: '4000+',
    icon: UsersThree,
  },
  {
    label: 'Location',
    value: '20 countries',
    icon: MapPin,
  },
  {
    label: 'Industry',
    value: 'Social & Non-Profit',
    icon: Buildings,
  },
]

function HeaderCompanyInDetailInfo() {
  const content = companyInDetailInfo.map((info) => {
    return (
      <Group key={info.label} w='100%' wrap='nowrap'>
        <Paper
          className='shrink-0'
          h={rem(44)}
          p='xs'
          radius='100%'
          w={rem(44)}
          withBorder
        >
          <Box
            c='blue'
            component={info.icon}
            h='100%'
            radius='100%'
            w='100%'
            weight='bold'
          />
        </Paper>

        <Stack gap={0}>
          <Text c='neutrals.5' lineClamp={1}>
            {info.label}
          </Text>
          <Text fw='600' lineClamp={1}>
            {info.value}
          </Text>
        </Stack>
      </Group>
    )
  })
  return <Group wrap='nowrap'>{content}</Group>
}

function HeaderCompanyName() {
  const publicViewLeftSection = (
    <Box className='icon-size-md' component={Eye} weight='fill' />
  )
  const profileSettingsLeftSection = (
    <Box className='icon-size-md' component={Gear} weight='bold' />
  )

  return (
    <Group>
      <Title order={3}>{company.name}</Title>

      <Button
        leftSection={publicViewLeftSection}
        ml='auto'
        size='md'
        variant='transparent'
      >
        Public View
      </Button>

      <Button
        color='secondary'
        leftSection={profileSettingsLeftSection}
        ml='md'
        size='md'
        variant='outline'
      >
        Profile Settings
      </Button>
    </Group>
  )
}

function Header() {
  return (
    <Group wrap='nowrap'>
      <HeaderCompanyAvatar />

      <Stack gap={0} w='100%'>
        <HeaderCompanyName />
        <Anchor mt='xs'>{company.website}</Anchor>

        <Box mt='md'>
          <HeaderCompanyInDetailInfo />
        </Box>
      </Stack>
    </Group>
  )
}

function TechStack() {
  return <div>TechStack</div>
}

function Profile() {
  return <div>Profile</div>
}

function Contact() {
  return <div>Contact</div>
}

function Gallery() {
  return <div>Gallery</div>
}

function OfficeLocations() {
  return <div>OfficeLocations</div>
}

function Team() {
  return <div>Team</div>
}

function Benefits() {
  return <div>Benefits</div>
}

function OpenPositions() {
  return <div>OpenPositions</div>
}

const gutter: MantineSpacing = 'xxxl'

export function CompanyProfile() {
  return (
    <Stack gap={gutter}>
      <Header />

      <Divider />

      <Grid gutter={gutter}>
        <Grid.Col span={{xl: 9, md: 8}}>
          <Stack gap={gutter}>
            <Profile />
            <Divider />
            <Contact />
            <Divider />
            <Gallery />
            <Divider />
            <Team />
            <Divider />
            <Benefits />
            <Divider />
            <OpenPositions />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{xl: 3, md: 4}}>
          <Stack gap={gutter}>
            <TechStack />
            <Divider />
            <OfficeLocations />
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
