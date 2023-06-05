// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedDateTimeFilterObjectSchema } from '../internals'

export const NestedDateTimeWithAggregatesFilterObjectSchema = Yup.object({
  equals: Yup.date(),
  lt: Yup.date(),
  lte: Yup.date(),
  gt: Yup.date(),
  gte: Yup.date(),
  not: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      NestedDateTimeWithAggregatesFilterObjectSchema.default(undefined)
    ),
  ]),
  _count: NestedIntFilterObjectSchema,
  _min: NestedDateTimeFilterObjectSchema,
  _max: NestedDateTimeFilterObjectSchema,
})
