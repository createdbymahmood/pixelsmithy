import localFont from 'next/font/local'

export const clashDisplay = localFont({
  src: [
    {
      path: './ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
