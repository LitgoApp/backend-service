// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionWhereUniqueInputObjectSchema } from '../internals'
import { RegionCreateWithoutPointsInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from '../internals'

export const RegionCreateOrConnectWithoutPointsInputObjectSchema = Yup.object({
  where: RegionWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    RegionCreateWithoutPointsInputObjectSchema,
    RegionUncheckedCreateWithoutPointsInputObjectSchema,
  ]),
})
