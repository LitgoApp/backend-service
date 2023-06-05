// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedBoolFilterObjectSchema } from '../internals'

export const BoolFilterObjectSchema = Yup.object({
  equals: Yup.boolean(),
  not: Yup.mixed().oneOfSchemas([Yup.boolean(), NestedBoolFilterObjectSchema]),
})
