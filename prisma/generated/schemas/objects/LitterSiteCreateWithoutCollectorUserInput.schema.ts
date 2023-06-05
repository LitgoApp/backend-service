// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserCreateNestedOneWithoutReportedLitterInputObjectSchema } from '../internals'

export const LitterSiteCreateWithoutCollectorUserInputObjectSchema = Yup.object(
  {
    litterSiteId: Yup.string(),
    isCollected: Yup.boolean(),
    harmful: Yup.boolean(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
    reporterUser: UserCreateNestedOneWithoutReportedLitterInputObjectSchema,
  }
)
