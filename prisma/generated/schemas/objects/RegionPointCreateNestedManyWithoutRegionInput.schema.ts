// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointCreateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointCreateOrConnectWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointCreateManyRegionInputEnvelopeObjectSchema } from '../internals'
import { RegionPointWhereUniqueInputObjectSchema } from '../internals'

export const RegionPointCreateNestedManyWithoutRegionInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      RegionPointCreateWithoutRegionInputObjectSchema,
      Yup.array().of(RegionPointCreateWithoutRegionInputObjectSchema),
      RegionPointUncheckedCreateWithoutRegionInputObjectSchema,
      Yup.array().of(RegionPointUncheckedCreateWithoutRegionInputObjectSchema),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      RegionPointCreateOrConnectWithoutRegionInputObjectSchema,
      Yup.array().of(RegionPointCreateOrConnectWithoutRegionInputObjectSchema),
    ]),
    createMany: RegionPointCreateManyRegionInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      RegionPointWhereUniqueInputObjectSchema,
      Yup.array().of(RegionPointWhereUniqueInputObjectSchema),
    ]),
  })
