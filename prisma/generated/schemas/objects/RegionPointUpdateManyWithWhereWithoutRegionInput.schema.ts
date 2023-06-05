// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointScalarWhereInputObjectSchema } from '../internals'
import { RegionPointUpdateManyMutationInputObjectSchema } from '../internals'
import { RegionPointUncheckedUpdateManyWithoutPointsInputObjectSchema } from '../internals'

export const RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema =
  Yup.object({
    where: RegionPointScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      RegionPointUpdateManyMutationInputObjectSchema,
      RegionPointUncheckedUpdateManyWithoutPointsInputObjectSchema,
    ]),
  })
