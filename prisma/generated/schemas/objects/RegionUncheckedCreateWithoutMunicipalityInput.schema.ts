// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointUncheckedCreateNestedManyWithoutRegionInputObjectSchema } from '../internals'

export const RegionUncheckedCreateWithoutMunicipalityInputObjectSchema =
  Yup.object({
    regionId: Yup.string(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
    points: RegionPointUncheckedCreateNestedManyWithoutRegionInputObjectSchema,
  })
