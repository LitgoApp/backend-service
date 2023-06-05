// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionUpdateWithoutPointsInputObjectSchema } from '../internals'
import { RegionUncheckedUpdateWithoutPointsInputObjectSchema } from '../internals'
import { RegionCreateWithoutPointsInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from '../internals'

export const RegionUpsertWithoutPointsInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    RegionUpdateWithoutPointsInputObjectSchema,
    RegionUncheckedUpdateWithoutPointsInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    RegionCreateWithoutPointsInputObjectSchema,
    RegionUncheckedCreateWithoutPointsInputObjectSchema,
  ]),
})
