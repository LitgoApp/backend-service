// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const MunicipalityWhereUniqueInputObjectSchema = Yup.object({
  municipalityId: Yup.string(),
  email: Yup.string(),
})
