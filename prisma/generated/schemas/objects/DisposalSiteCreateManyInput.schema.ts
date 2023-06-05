// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const DisposalSiteCreateManyInputObjectSchema = Yup.object({
  disposalSiteId: Yup.string(),
  municipalityId: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
