// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityUpdateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from '../internals'

export const MunicipalityUpsertWithoutDisposalSitesInputObjectSchema =
  Yup.object({
    update: Yup.mixed().oneOfSchemas([
      MunicipalityUpdateWithoutDisposalSitesInputObjectSchema,
      MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutDisposalSitesInputObjectSchema,
      MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
    ]),
  })
