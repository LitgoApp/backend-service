// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedBoolFilterObjectSchema } from '../internals'

export const NestedBoolWithAggregatesFilterObjectSchema = Yup.object({
  equals: Yup.boolean(),
  not: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    Yup.lazy(() =>
      NestedBoolWithAggregatesFilterObjectSchema.default(undefined)
    ),
  ]),
  _count: NestedIntFilterObjectSchema,
  _min: NestedBoolFilterObjectSchema,
  _max: NestedBoolFilterObjectSchema,
})
