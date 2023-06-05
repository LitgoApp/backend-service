// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionWhereUniqueInputObjectSchema } from '../internals'
import { RegionUpdateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema } from '../internals'

export const RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: RegionWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      RegionUpdateWithoutMunicipalityInputObjectSchema,
      RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema,
    ]),
  })
