// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionCreateManyMunicipalityInputObjectSchema } from '../internals'

export const RegionCreateManyMunicipalityInputEnvelopeObjectSchema = Yup.object(
  {
    data: Yup.mixed().oneOfSchemas([
      RegionCreateManyMunicipalityInputObjectSchema,
      Yup.array().of(RegionCreateManyMunicipalityInputObjectSchema),
    ]),
    skipDuplicates: Yup.boolean(),
  }
)
