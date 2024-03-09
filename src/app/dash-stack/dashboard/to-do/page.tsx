import {ToDoList} from '@dash-stack/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'To Do',
})

export default function ToDo() {
  return <ToDoList />
}
