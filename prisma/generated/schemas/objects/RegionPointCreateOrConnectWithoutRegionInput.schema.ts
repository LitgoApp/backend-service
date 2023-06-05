// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointWhereUniqueInputObjectSchema } from '../internals'
import { RegionPointCreateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from '../internals'

export const RegionPointCreateOrConnectWithoutRegionInputObjectSchema =
  Yup.object({
    where: RegionPointWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      RegionPointCreateWithoutRegionInputObjectSchema,
      RegionPointUncheckedCreateWithoutRegionInputObjectSchema,
    ]),
  })
