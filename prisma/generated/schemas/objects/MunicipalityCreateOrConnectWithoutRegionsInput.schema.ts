// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityWhereUniqueInputObjectSchema } from '../internals'
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from '../internals'

export const MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema =
  Yup.object({
    where: MunicipalityWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutRegionsInputObjectSchema,
      MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema,
    ]),
  })
