// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteUpdateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema } from '../internals'

export const LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema =
  Yup.object({
    where: LitterSiteWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateWithoutReporterUserInputObjectSchema,
      LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema,
    ]),
  })
