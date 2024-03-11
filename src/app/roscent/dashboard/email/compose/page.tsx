import {EmailCompose} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Compose',
})

export default function Compose() {
  return <EmailCompose />
}
