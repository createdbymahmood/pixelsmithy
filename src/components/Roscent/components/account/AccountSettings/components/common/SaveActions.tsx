import {Button, Group} from '@mantine/core'

export function SaveActions() {
  return (
    <Group gap='xs'>
      <Button size='xs' variant='light'>
        Cancel
      </Button>
      <Button size='xs'>Save Changes</Button>
    </Group>
  )
}
