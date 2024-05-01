import type {QueryParamOptions} from 'use-query-params'
import {StringParam, useQueryParam, withDefault} from 'use-query-params'

import {CALLBACK_URL_PARAM_KEY} from '@/constants'

interface UseCallbackUrlParams {
  defaultValue: string
  options?: QueryParamOptions
}

export const useCallbackUrl = (params: UseCallbackUrlParams) => {
  const name = CALLBACK_URL_PARAM_KEY
  const paramConfig = withDefault(StringParam, params.defaultValue)
  const options = params.options

  return useQueryParam(name, paramConfig, options)
}
