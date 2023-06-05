// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema } from '../internals'

export const MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema =
  Yup.object({
    municipalityId: Yup.string(),
    email: Yup.string().required(),
    name: Yup.string().required(),
    password: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
    disposalSites:
      DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema,
  })
