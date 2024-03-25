import {EmailCompose} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Compose',
})

export default function Compose() {
  return <EmailCompose />
}
