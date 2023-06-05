// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUpsertWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityWhereUniqueInputObjectSchema } from '../internals'
import { MunicipalityUpdateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema } from '../internals'

export const MunicipalityUpdateOneRequiredWithoutRegionsNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutRegionsInputObjectSchema,
      MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema,
    ]),
    connectOrCreate: MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema,
    upsert: MunicipalityUpsertWithoutRegionsInputObjectSchema,
    connect: MunicipalityWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      MunicipalityUpdateWithoutRegionsInputObjectSchema,
      MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema,
    ]),
  })
