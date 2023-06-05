// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteUncheckedCreateNestedManyWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInputObjectSchema } from '../internals'

export const UserUncheckedCreateInputObjectSchema = Yup.object({
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
  reportedLitter:
    LitterSiteUncheckedCreateNestedManyWithoutReporterUserInputObjectSchema,
  collectedLitter:
    LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInputObjectSchema,
})
