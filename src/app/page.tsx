import {Applications} from '@/components/Applications'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Home',
})

export default function App() {
  return <Applications />
}
