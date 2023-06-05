// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedFloatFilterObjectSchema } from '../internals'

export const NestedFloatWithAggregatesFilterObjectSchema = Yup.object({
  equals: Yup.number(),
  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()), Yup.number()]),
  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()), Yup.number()]),
  lt: Yup.number(),
  lte: Yup.number(),
  gt: Yup.number(),
  gte: Yup.number(),
  not: Yup.mixed().oneOfSchemas([
    Yup.number(),
    Yup.lazy(() =>
      NestedFloatWithAggregatesFilterObjectSchema.default(undefined)
    ),
  ]),
  _count: NestedIntFilterObjectSchema,
  _avg: NestedFloatFilterObjectSchema,
  _sum: NestedFloatFilterObjectSchema,
  _min: NestedFloatFilterObjectSchema,
  _max: NestedFloatFilterObjectSchema,
})
