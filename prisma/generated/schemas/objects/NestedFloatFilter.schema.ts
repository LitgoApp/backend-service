// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const NestedFloatFilterObjectSchema = Yup.object({
  equals: Yup.number(),
  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()), Yup.number()]),
  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()), Yup.number()]),
  lt: Yup.number(),
  lte: Yup.number(),
  gt: Yup.number(),
  gte: Yup.number(),
  not: Yup.mixed().oneOfSchemas([
    Yup.number(),
    Yup.lazy(() => NestedFloatFilterObjectSchema.default(undefined)),
  ]),
})
