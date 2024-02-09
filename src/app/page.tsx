import {Projects} from '@/components/Projects'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Home',
})

export default function App() {
  return <Projects />
}
