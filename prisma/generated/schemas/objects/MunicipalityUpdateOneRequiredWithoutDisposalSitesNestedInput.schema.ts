// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUpsertWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityWhereUniqueInputObjectSchema } from '../internals'
import { MunicipalityUpdateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema } from '../internals'

export const MunicipalityUpdateOneRequiredWithoutDisposalSitesNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutDisposalSitesInputObjectSchema,
      MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
    ]),
    connectOrCreate:
      MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema,
    upsert: MunicipalityUpsertWithoutDisposalSitesInputObjectSchema,
    connect: MunicipalityWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      MunicipalityUpdateWithoutDisposalSitesInputObjectSchema,
      MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema,
    ]),
  })
