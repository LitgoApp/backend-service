// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema } from '../internals'

export const MunicipalityUncheckedCreateInputObjectSchema = Yup.object({
  municipalityId: Yup.string(),
  email: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  regions: RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema,
  disposalSites:
    DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema,
})
