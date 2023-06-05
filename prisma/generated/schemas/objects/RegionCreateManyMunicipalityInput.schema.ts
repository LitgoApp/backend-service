// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const RegionCreateManyMunicipalityInputObjectSchema = Yup.object({
  regionId: Yup.string(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
