// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema } from '../internals'

export const RegionCreateWithoutPointsInputObjectSchema = Yup.object({
  regionId: Yup.string(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  municipality: MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema,
})
