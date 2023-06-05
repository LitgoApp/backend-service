// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionScalarWhereInputObjectSchema } from '../internals'
import { RegionUpdateManyMutationInputObjectSchema } from '../internals'
import { RegionUncheckedUpdateManyWithoutRegionsInputObjectSchema } from '../internals'

export const RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: RegionScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      RegionUpdateManyMutationInputObjectSchema,
      RegionUncheckedUpdateManyWithoutRegionsInputObjectSchema,
    ]),
  })
