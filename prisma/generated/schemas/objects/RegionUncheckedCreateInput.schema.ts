// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointUncheckedCreateNestedManyWithoutRegionInputObjectSchema } from '../internals'

export const RegionUncheckedCreateInputObjectSchema = Yup.object({
  regionId: Yup.string(),
  municipalityId: Yup.string().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  points: RegionPointUncheckedCreateNestedManyWithoutRegionInputObjectSchema,
})
