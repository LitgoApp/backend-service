// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionWhereUniqueInputObjectSchema } from '../internals'
import { RegionCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'

export const RegionCreateOrConnectWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: RegionWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      RegionCreateWithoutMunicipalityInputObjectSchema,
      RegionUncheckedCreateWithoutMunicipalityInputObjectSchema,
    ]),
  })
