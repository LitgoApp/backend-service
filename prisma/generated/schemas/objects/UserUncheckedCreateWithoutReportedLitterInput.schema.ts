// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInputObjectSchema } from '../internals'

export const UserUncheckedCreateWithoutReportedLitterInputObjectSchema =
  Yup.object({
    userId: Yup.string(),
    email: Yup.string().required(),
    name: Yup.string().required(),
    password: Yup.string().required(),
    level: Yup.number(),
    points: Yup.number(),
    fraudLevel: Yup.number(),
    address: Yup.string().required(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
    collectedLitter:
      LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInputObjectSchema,
  })
