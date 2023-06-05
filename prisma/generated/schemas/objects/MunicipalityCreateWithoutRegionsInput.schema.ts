// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteCreateNestedManyWithoutMunicipalityInputObjectSchema } from '../internals'

export const MunicipalityCreateWithoutRegionsInputObjectSchema = Yup.object({
  municipalityId: Yup.string(),
  email: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  disposalSites:
    DisposalSiteCreateNestedManyWithoutMunicipalityInputObjectSchema,
})
