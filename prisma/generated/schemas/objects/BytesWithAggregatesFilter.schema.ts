// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedBytesWithAggregatesFilterObjectSchema } from '../internals'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedBytesFilterObjectSchema } from '../internals'

export const BytesWithAggregatesFilterObjectSchema = Yup.object({
  not: Yup.mixed().oneOfSchemas([NestedBytesWithAggregatesFilterObjectSchema]),
  _count: NestedIntFilterObjectSchema,
  _min: NestedBytesFilterObjectSchema,
  _max: NestedBytesFilterObjectSchema,
})
