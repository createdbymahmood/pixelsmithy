'use client'

import {rem} from '@mantine/core'
import type {ApexOptions} from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

import {inter} from '@/lib/styles/font/inter'

const data = {
  series: [
    {
      name: 'Returning customers',
      data: [10, 20, 30, 40, 50, 60, 70],
    },
  ] as ApexAxisChartSeries,

  options: {
    chart: {
      type: 'bar',
      height: 250,

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        endingShape: 'rounded',
        borderRadius: 5,
        barHeight: '90%',
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
      categories: ['12', '13', '14', '15', '16', '17', '18'],
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
      },
    },
    yaxis: {
      show: false,
      stepSize: 1,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },

    tooltip: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    colors: ['var(--mantine-color-green-6)'],
    grid: {
      show: false,
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
  } as ApexOptions,
}

export function SalesChartView() {
  return (
    <ReactApexChart
      height={data.options.chart?.height}
      options={data.options}
      series={data.series}
      type='bar'
    />
  )
}
