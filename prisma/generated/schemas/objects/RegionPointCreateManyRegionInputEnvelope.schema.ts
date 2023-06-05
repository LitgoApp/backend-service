// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointCreateManyRegionInputObjectSchema } from '../internals'

export const RegionPointCreateManyRegionInputEnvelopeObjectSchema = Yup.object({
  data: Yup.mixed().oneOfSchemas([
    RegionPointCreateManyRegionInputObjectSchema,
    Yup.array().of(RegionPointCreateManyRegionInputObjectSchema),
  ]),
  skipDuplicates: Yup.boolean(),
})
