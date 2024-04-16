import {Stack, Text} from '@mantine/core'

interface FormHeaderProps {
  title: string
  description: string
}

export function FormHeader(props: FormHeaderProps) {
  return (
    <Stack gap='xxs'>
      <Text fw='600' size='lg'>
        {props.title}
      </Text>
      <Text c='neutrals.4'>{props.description}</Text>
    </Stack>
  )
}
