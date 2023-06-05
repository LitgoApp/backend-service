// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const DisposalSiteCreateManyMunicipalityInputObjectSchema = Yup.object({
  disposalSiteId: Yup.string(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
