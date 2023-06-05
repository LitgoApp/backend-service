// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema } from '../internals'

export const MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema =
  Yup.object({
    municipalityId: Yup.string(),
    email: Yup.string().required(),
    name: Yup.string().required(),
    password: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
    regions:
      RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema,
  })
