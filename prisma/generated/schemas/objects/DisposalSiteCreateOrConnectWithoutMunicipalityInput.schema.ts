// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteWhereUniqueInputObjectSchema } from '../internals'
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'

export const DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: DisposalSiteWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      DisposalSiteCreateWithoutMunicipalityInputObjectSchema,
      DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
    ]),
  })
