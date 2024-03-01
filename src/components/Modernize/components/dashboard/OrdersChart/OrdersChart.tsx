'use client'

import {Box, Card, Group, rem, Stack, Text, Title} from '@mantine/core'
import type {ApexOptions} from 'apexcharts'
import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts'

import {inter} from '@/lib/styles/font/inter'

const data = {
  series: [
    {
      name: 'May 21',
      data: [25, 10, 7, 7, 26, 27, 30, 10, 20, 25, 32, 42, 50],
    },
    {
      name: 'May 22',
      data: [5, 14, 10, 22, 33, 30, 32, 48, 42, 25, 25, 32, 30],
    },
  ],
  options: {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {show: false},
      offsetX: -10,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: 'var(--mantine-color-general-1)',
      strokeDashArray: 2,
      position: 'back',
    },
    colors: [
      'var(--mantine-color-general-2)',
      'var(--mantine-color-primary-7)',
    ],
    xaxis: {
      categories: [
        '4am',
        '5am',
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12am',
        '1pm',
        '2pm',
        '3pm',
      ],
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: 'var(--mantine-color-general-3)',
          fontSize: rem(12),
          fontFamily: inter.style.fontFamily,
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      stepSize: 10,
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: 'var(--mantine-color-general-3)',
          fontSize: rem(12),
          fontFamily: inter.style.fontFamily,
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      },
      tooltip: {
        enabled: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -5,
    },
    tooltip: {
      enabled: false,
    },
  } as ApexOptions,
}

function Header() {
  return (
    <Fragment>
      <Text fw='bold'>Orders Over Time</Text>

      <Group gap={rem(40)} mt={rem(24)}>
        <Stack gap={0}>
          <Title order={6}>645</Title>
          <Text c='general.5' size='sm'>
            Orders on May 22
          </Text>
        </Stack>

        <Stack gap={0}>
          <Title order={6}>472</Title>
          <Text c='general.5' size='sm'>
            Orders on May 21
          </Text>
        </Stack>
      </Group>
    </Fragment>
  )
}

export function OrdersChart() {
  return (
    <Card p={rem(28)}>
      <Stack gap={rem(8)}>
        <Header />

        <ReactApexChart
          height={350}
          options={data.options}
          series={data.series}
          type={data.options.chart?.type}
        />
      </Stack>
    </Card>
  )
}
