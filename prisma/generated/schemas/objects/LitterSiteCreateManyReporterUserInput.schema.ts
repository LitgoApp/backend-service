// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const LitterSiteCreateManyReporterUserInputObjectSchema = Yup.object({
  litterSiteId: Yup.string(),
  collectorUserId: Yup.mixed().oneOfSchemas([Yup.string()]),
  isCollected: Yup.boolean(),
  harmful: Yup.boolean(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
