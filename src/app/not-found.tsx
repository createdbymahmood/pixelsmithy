import {Box, Center, MantineProvider, Text} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

export default function NotFound() {
  return (
    <MantineProvider>
      <Box h='100vh' w='100vw'>
        <Center bg='black' h='100%'>
          <Text c='white' className={inter.className} size='sm'>
            404 | The requested page couldn't be found
          </Text>
        </Center>
      </Box>
    </MantineProvider>
  )
}
