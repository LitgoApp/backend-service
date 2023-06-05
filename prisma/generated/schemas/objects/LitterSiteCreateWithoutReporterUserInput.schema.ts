// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserCreateNestedOneWithoutCollectedLitterInputObjectSchema } from '../internals'

export const LitterSiteCreateWithoutReporterUserInputObjectSchema = Yup.object({
  litterSiteId: Yup.string(),
  isCollected: Yup.boolean(),
  harmful: Yup.boolean(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  collectorUser: UserCreateNestedOneWithoutCollectedLitterInputObjectSchema,
})
