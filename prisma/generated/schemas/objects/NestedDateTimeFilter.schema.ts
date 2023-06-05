// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const NestedDateTimeFilterObjectSchema = Yup.object({
  equals: Yup.date(),
  lt: Yup.date(),
  lte: Yup.date(),
  gt: Yup.date(),
  gte: Yup.date(),
  not: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => NestedDateTimeFilterObjectSchema.default(undefined)),
  ]),
})
