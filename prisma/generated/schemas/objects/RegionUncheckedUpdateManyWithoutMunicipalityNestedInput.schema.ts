// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionCreateOrConnectWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionCreateManyMunicipalityInputEnvelopeObjectSchema } from '../internals'
import { RegionWhereUniqueInputObjectSchema } from '../internals'
import { RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionScalarWhereInputObjectSchema } from '../internals'

export const RegionUncheckedUpdateManyWithoutMunicipalityNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      RegionCreateWithoutMunicipalityInputObjectSchema,
      Yup.array().of(RegionCreateWithoutMunicipalityInputObjectSchema),
      RegionUncheckedCreateWithoutMunicipalityInputObjectSchema,
      Yup.array().of(RegionUncheckedCreateWithoutMunicipalityInputObjectSchema),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      RegionCreateOrConnectWithoutMunicipalityInputObjectSchema,
      Yup.array().of(RegionCreateOrConnectWithoutMunicipalityInputObjectSchema),
    ]),
    upsert: Yup.mixed().oneOfSchemas([
      RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema
      ),
    ]),
    createMany: RegionCreateManyMunicipalityInputEnvelopeObjectSchema,
    set: Yup.mixed().oneOfSchemas([
      RegionWhereUniqueInputObjectSchema,
      Yup.array().of(RegionWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      RegionWhereUniqueInputObjectSchema,
      Yup.array().of(RegionWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      RegionWhereUniqueInputObjectSchema,
      Yup.array().of(RegionWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      RegionWhereUniqueInputObjectSchema,
      Yup.array().of(RegionWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema
      ),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      RegionScalarWhereInputObjectSchema,
      Yup.array().of(RegionScalarWhereInputObjectSchema),
    ]),
  })
