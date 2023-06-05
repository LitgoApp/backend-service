// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { QueryModeSchema } from '../internals'
import { NestedStringNullableWithAggregatesFilterObjectSchema } from '../internals'
import { NestedIntNullableFilterObjectSchema } from '../internals'
import { NestedStringNullableFilterObjectSchema } from '../internals'

export const StringNullableWithAggregatesFilterObjectSchema = Yup.object({
  equals: Yup.mixed().oneOfSchemas([Yup.string()]),
  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.string()), Yup.string()]),
  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.string()), Yup.string()]),
  lt: Yup.string(),
  lte: Yup.string(),
  gt: Yup.string(),
  gte: Yup.string(),
  contains: Yup.string(),
  startsWith: Yup.string(),
  endsWith: Yup.string(),
  mode: QueryModeSchema,
  not: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NestedStringNullableWithAggregatesFilterObjectSchema,
  ]),
  _count: NestedIntNullableFilterObjectSchema,
  _min: NestedStringNullableFilterObjectSchema,
  _max: NestedStringNullableFilterObjectSchema,
})
