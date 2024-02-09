import {MantineProvider} from '@mantine/core'

import {Projects} from '@/components/Projects'
import {defaultThemeColorScheme} from '@/constants'

export default function App() {
  return (
    <MantineProvider defaultColorScheme={defaultThemeColorScheme}>
      <Projects />
    </MantineProvider>
  )
}
