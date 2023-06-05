// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from '../internals'

export const LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema =
  Yup.object({
    where: LitterSiteWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      LitterSiteCreateWithoutReporterUserInputObjectSchema,
      LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
    ]),
  })
