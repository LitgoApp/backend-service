// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointCreateNestedManyWithoutRegionInputObjectSchema } from '../internals'

export const RegionCreateWithoutMunicipalityInputObjectSchema = Yup.object({
  regionId: Yup.string(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  points: RegionPointCreateNestedManyWithoutRegionInputObjectSchema,
})
