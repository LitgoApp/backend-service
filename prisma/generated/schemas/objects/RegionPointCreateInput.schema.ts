// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionCreateNestedOneWithoutPointsInputObjectSchema } from '../internals'

export const RegionPointCreateInputObjectSchema = Yup.object({
  regionPointId: Yup.string(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  region: RegionCreateNestedOneWithoutPointsInputObjectSchema,
})
