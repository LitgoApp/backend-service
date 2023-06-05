// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedIntFilterObjectSchema } from '../internals'
import { NestedStringFilterObjectSchema } from '../internals'

export const NestedStringWithAggregatesFilterObjectSchema = Yup.object({
  equals: Yup.string(),
  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.string()), Yup.string()]),
  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.string()), Yup.string()]),
  lt: Yup.string(),
  lte: Yup.string(),
  gt: Yup.string(),
  gte: Yup.string(),
  contains: Yup.string(),
  startsWith: Yup.string(),
  endsWith: Yup.string(),
  not: Yup.mixed().oneOfSchemas([
    Yup.string(),
    Yup.lazy(() =>
      NestedStringWithAggregatesFilterObjectSchema.default(undefined)
    ),
  ]),
  _count: NestedIntFilterObjectSchema,
  _min: NestedStringFilterObjectSchema,
  _max: NestedStringFilterObjectSchema,
})
