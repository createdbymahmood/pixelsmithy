import {SnowUIProviders} from '@/components/SnowUI/layout/SnowUIProviders'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Snow UI',
})

export default function SnowUI() {
  return (
    <SnowUIProviders>
      <div>Hello World!</div>
    </SnowUIProviders>
  )
}
