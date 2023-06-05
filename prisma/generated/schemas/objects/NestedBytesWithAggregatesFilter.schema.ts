// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedBytesFilterObjectSchema } from '../internals'

export const NestedBytesWithAggregatesFilterObjectSchema = Yup.object({
  not: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      NestedBytesWithAggregatesFilterObjectSchema.default(undefined)
    ),
  ]),
  _count: NestedIntFilterObjectSchema,
  _min: NestedBytesFilterObjectSchema,
  _max: NestedBytesFilterObjectSchema,
})
