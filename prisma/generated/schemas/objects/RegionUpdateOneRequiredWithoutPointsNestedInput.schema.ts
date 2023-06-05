// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionCreateWithoutPointsInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from '../internals'
import { RegionCreateOrConnectWithoutPointsInputObjectSchema } from '../internals'
import { RegionUpsertWithoutPointsInputObjectSchema } from '../internals'
import { RegionWhereUniqueInputObjectSchema } from '../internals'
import { RegionUpdateWithoutPointsInputObjectSchema } from '../internals'
import { RegionUncheckedUpdateWithoutPointsInputObjectSchema } from '../internals'

export const RegionUpdateOneRequiredWithoutPointsNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      RegionCreateWithoutPointsInputObjectSchema,
      RegionUncheckedCreateWithoutPointsInputObjectSchema,
    ]),
    connectOrCreate: RegionCreateOrConnectWithoutPointsInputObjectSchema,
    upsert: RegionUpsertWithoutPointsInputObjectSchema,
    connect: RegionWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      RegionUpdateWithoutPointsInputObjectSchema,
      RegionUncheckedUpdateWithoutPointsInputObjectSchema,
    ]),
  })
