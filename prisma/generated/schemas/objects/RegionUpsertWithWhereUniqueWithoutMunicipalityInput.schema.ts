// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionWhereUniqueInputObjectSchema } from '../internals'
import { RegionUpdateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'

export const RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: RegionWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      RegionUpdateWithoutMunicipalityInputObjectSchema,
      RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      RegionCreateWithoutMunicipalityInputObjectSchema,
      RegionUncheckedCreateWithoutMunicipalityInputObjectSchema,
    ]),
  })
