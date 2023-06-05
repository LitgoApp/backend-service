// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema } from '../internals'
import { RegionPointCreateNestedManyWithoutRegionInputObjectSchema } from '../internals'

export const RegionCreateInputObjectSchema = Yup.object({
  regionId: Yup.string(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  municipality: MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema,
  points: RegionPointCreateNestedManyWithoutRegionInputObjectSchema,
})
