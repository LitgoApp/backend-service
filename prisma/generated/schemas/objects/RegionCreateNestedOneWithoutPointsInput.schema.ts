// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionCreateWithoutPointsInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from '../internals'
import { RegionCreateOrConnectWithoutPointsInputObjectSchema } from '../internals'
import { RegionWhereUniqueInputObjectSchema } from '../internals'

export const RegionCreateNestedOneWithoutPointsInputObjectSchema = Yup.object({
  create: Yup.mixed().oneOfSchemas([
    RegionCreateWithoutPointsInputObjectSchema,
    RegionUncheckedCreateWithoutPointsInputObjectSchema,
  ]),
  connectOrCreate: RegionCreateOrConnectWithoutPointsInputObjectSchema,
  connect: RegionWhereUniqueInputObjectSchema,
})
