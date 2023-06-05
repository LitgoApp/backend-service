// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const NestedStringFilterObjectSchema = Yup.object({
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
    Yup.lazy(() => NestedStringFilterObjectSchema.default(undefined)),
  ]),
})
