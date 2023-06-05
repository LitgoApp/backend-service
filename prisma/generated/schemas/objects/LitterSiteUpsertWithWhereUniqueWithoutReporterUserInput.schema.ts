// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteUpdateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from '../internals'

export const LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema =
  Yup.object({
    where: LitterSiteWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateWithoutReporterUserInputObjectSchema,
      LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      LitterSiteCreateWithoutReporterUserInputObjectSchema,
      LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
    ]),
  })
