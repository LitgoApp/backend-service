// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedDateTimeFilterObjectSchema } from '../internals'

export const DateTimeFilterObjectSchema = Yup.object({
  equals: Yup.date(),
  lt: Yup.date(),
  lte: Yup.date(),
  gt: Yup.date(),
  gte: Yup.date(),
  not: Yup.mixed().oneOfSchemas([NestedDateTimeFilterObjectSchema]),
})
