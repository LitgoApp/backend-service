// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const MunicipalityCreateManyInputObjectSchema = Yup.object({
  municipalityId: Yup.string(),
  email: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
