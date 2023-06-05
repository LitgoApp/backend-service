// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityUpdateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from '../internals'

export const MunicipalityUpsertWithoutRegionsInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    MunicipalityUpdateWithoutRegionsInputObjectSchema,
    MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    MunicipalityCreateWithoutRegionsInputObjectSchema,
    MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema,
  ]),
})
