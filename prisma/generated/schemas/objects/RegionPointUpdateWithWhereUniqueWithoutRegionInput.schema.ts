// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointWhereUniqueInputObjectSchema } from '../internals'
import { RegionPointUpdateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUncheckedUpdateWithoutRegionInputObjectSchema } from '../internals'

export const RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema =
  Yup.object({
    where: RegionPointWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      RegionPointUpdateWithoutRegionInputObjectSchema,
      RegionPointUncheckedUpdateWithoutRegionInputObjectSchema,
    ]),
  })
