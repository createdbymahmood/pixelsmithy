'use client'

import {Card, rem, Stack, Text} from '@mantine/core'
import type {ApexOptions} from 'apexcharts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

import {inter} from '@/lib/styles/font/inter'

const data = {
  series: [
    {
      name: 'Returning customers',
      data: [450, 370, 320, 420, 435, 360, 401, 410, 430, 399, 410, 410],
    },
    {
      name: 'New customers',
      data: [322, 250, 170, 240, 200, 260, 190, 175, 196, 250, 150, 120],
    },
  ] as ApexAxisChartSeries,

  options: {
    chart: {
      type: 'bar',
      height: 300,
      offsetX: -17,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded',
        borderRadius: 5,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        barHeight: '70%',

        distributed: false,
        rangeBarOverlap: true,
        rangeBarGroupRows: false,
        hideZeroBarsWhenGrouped: false,
        isDumbbell: false,
        dumbbellColors: undefined,
        isFunnel: false,
        isFunnel3d: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: undefined,
            },
          ],
          backgroundBarColors: [],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 0,
        },
        dataLabels: {
          position: 'top',
          maxItems: 100,
          hideOverflowingLabels: true,
          orientation: 'horizontal',
          total: {
            enabled: false,
            formatter: undefined,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#373d3f',
              fontSize: '12px',
              fontFamily: undefined,
              fontWeight: 600,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      offsetY: 2,
      axisBorder: {show: false},
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisTicks: {
        show: false,
      },
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
        formatter: (value) => {
          return value.toString()
        },
      },
    },
    yaxis: {
      show: true,
      showAlways: false,
      showForNullSeries: true,
      seriesName: undefined,
      opposite: false,
      reversed: false,
      logarithmic: false,
      logBase: 10,
      tickAmount: undefined,
      min: undefined,
      max: undefined,
      stepSize: 100,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
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
        formatter: (value) => {
          return value.toString()
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        text: undefined,
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: [
      'var(--mantine-color-general-2)',
      'var(--mantine-color-primary-7)',
    ],
    grid: {
      show: true,
      borderColor: 'var(--mantine-color-general-1)',
      strokeDashArray: 2,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    } as ApexGrid,
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'top',
      horizontalAlign: 'left',
      floating: false,
      fontSize: '14px',
      fontFamily: inter.style.fontFamily,
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: -23,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 3,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 2,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  } as ApexOptions,
}

export function CustomerGrowthReports() {
  return (
    <Card p={rem(28)}>
      <Stack gap={rem(8)}>
        <Text fw='bold'>Customer Growth</Text>
        <ReactApexChart
          height={350}
          options={data.options}
          series={data.series}
          type='bar'
        />
      </Stack>
    </Card>
  )
}
