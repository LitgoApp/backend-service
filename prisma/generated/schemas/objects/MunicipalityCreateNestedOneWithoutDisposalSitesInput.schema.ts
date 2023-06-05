// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema } from '../internals'
import { MunicipalityWhereUniqueInputObjectSchema } from '../internals'

export const MunicipalityCreateNestedOneWithoutDisposalSitesInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      MunicipalityCreateWithoutDisposalSitesInputObjectSchema,
      MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
    ]),
    connectOrCreate:
      MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema,
    connect: MunicipalityWhereUniqueInputObjectSchema,
  })
