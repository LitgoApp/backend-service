// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointWhereUniqueInputObjectSchema } from '../internals'
import { RegionPointUpdateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUncheckedUpdateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointCreateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from '../internals'

export const RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema =
  Yup.object({
    where: RegionPointWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      RegionPointUpdateWithoutRegionInputObjectSchema,
      RegionPointUncheckedUpdateWithoutRegionInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      RegionPointCreateWithoutRegionInputObjectSchema,
      RegionPointUncheckedCreateWithoutRegionInputObjectSchema,
    ]),
  })
