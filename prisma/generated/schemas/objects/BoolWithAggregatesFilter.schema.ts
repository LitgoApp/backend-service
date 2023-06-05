// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedBoolWithAggregatesFilterObjectSchema } from '../internals'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedBoolFilterObjectSchema } from '../internals'

export const BoolWithAggregatesFilterObjectSchema = Yup.object({
  equals: Yup.boolean(),
  not: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    NestedBoolWithAggregatesFilterObjectSchema,
  ]),
  _count: NestedIntFilterObjectSchema,
  _min: NestedBoolFilterObjectSchema,
  _max: NestedBoolFilterObjectSchema,
})
