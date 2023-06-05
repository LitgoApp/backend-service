// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointCreateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointCreateOrConnectWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointCreateManyRegionInputEnvelopeObjectSchema } from '../internals'
import { RegionPointWhereUniqueInputObjectSchema } from '../internals'
import { RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema } from '../internals'
import { RegionPointScalarWhereInputObjectSchema } from '../internals'

export const RegionPointUpdateManyWithoutRegionNestedInputObjectSchema =
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
    upsert: Yup.mixed().oneOfSchemas([
      RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema,
      Yup.array().of(
        RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema
      ),
    ]),
    createMany: RegionPointCreateManyRegionInputEnvelopeObjectSchema,
    set: Yup.mixed().oneOfSchemas([
      RegionPointWhereUniqueInputObjectSchema,
      Yup.array().of(RegionPointWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      RegionPointWhereUniqueInputObjectSchema,
      Yup.array().of(RegionPointWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      RegionPointWhereUniqueInputObjectSchema,
      Yup.array().of(RegionPointWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      RegionPointWhereUniqueInputObjectSchema,
      Yup.array().of(RegionPointWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema,
      Yup.array().of(
        RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema,
      Yup.array().of(
        RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema
      ),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      RegionPointScalarWhereInputObjectSchema,
      Yup.array().of(RegionPointScalarWhereInputObjectSchema),
    ]),
  })
