// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityWhereUniqueInputObjectSchema } from '../internals'
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from '../internals'

export const MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema =
  Yup.object({
    where: MunicipalityWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutDisposalSitesInputObjectSchema,
      MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
    ]),
  })
