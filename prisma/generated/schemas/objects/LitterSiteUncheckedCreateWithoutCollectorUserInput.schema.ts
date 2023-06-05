// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema =
  Yup.object({
    litterSiteId: Yup.string(),
    reporterUserId: Yup.string().required(),
    isCollected: Yup.boolean(),
    harmful: Yup.boolean(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
  })
