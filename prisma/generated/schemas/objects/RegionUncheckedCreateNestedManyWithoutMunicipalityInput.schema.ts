// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionCreateOrConnectWithoutMunicipalityInputObjectSchema } from '../internals'
import { RegionCreateManyMunicipalityInputEnvelopeObjectSchema } from '../internals'
import { RegionWhereUniqueInputObjectSchema } from '../internals'

export const RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema =
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
    createMany: RegionCreateManyMunicipalityInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      RegionWhereUniqueInputObjectSchema,
      Yup.array().of(RegionWhereUniqueInputObjectSchema),
    ]),
  })
