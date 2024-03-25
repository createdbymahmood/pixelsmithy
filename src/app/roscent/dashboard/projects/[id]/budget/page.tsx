import {ProjectBudget} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Budget',
})

export default function Budget() {
  return <ProjectBudget />
}
