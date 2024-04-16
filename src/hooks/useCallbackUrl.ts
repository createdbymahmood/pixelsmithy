import type {QueryParamOptions} from 'use-query-params'
import {StringParam, useQueryParam, withDefault} from 'use-query-params'

import {CALLBACK_URL_PARAM_KEY} from '@/constants'

interface UseCallbackUrlParams {
  defaultValue: string
  options?: QueryParamOptions
}

export const useCallbackUrl = (params: UseCallbackUrlParams) =>
  useQueryParam(
    CALLBACK_URL_PARAM_KEY,
    withDefault(StringParam, params.defaultValue),
    params.options,
  )
