// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const RegionCreateManyInputObjectSchema = Yup.object({
  regionId: Yup.string(),
  municipalityId: Yup.string().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
