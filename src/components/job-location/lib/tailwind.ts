import resolveConfig from 'tailwindcss/resolveConfig'
import type {Config} from 'tailwindcss/types/config'

// import type {} from 'tailwindcss/resolveConfig/'
import fullTailwindConfig from '../../../../tailwind.config'

export const tailwindConfig = resolveConfig(
  fullTailwindConfig as unknown as Config,
)
