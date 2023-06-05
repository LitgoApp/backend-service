// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityWhereUniqueInputObjectSchema } from '../internals'

export const MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutRegionsInputObjectSchema,
      MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema,
    ]),
    connectOrCreate: MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema,
    connect: MunicipalityWhereUniqueInputObjectSchema,
  })
