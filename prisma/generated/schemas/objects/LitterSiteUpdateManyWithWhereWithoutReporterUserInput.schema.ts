// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteScalarWhereInputObjectSchema } from '../internals'
import { LitterSiteUpdateManyMutationInputObjectSchema } from '../internals'
import { LitterSiteUncheckedUpdateManyWithoutReportedLitterInputObjectSchema } from '../internals'

export const LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema =
  Yup.object({
    where: LitterSiteScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateManyMutationInputObjectSchema,
      LitterSiteUncheckedUpdateManyWithoutReportedLitterInputObjectSchema,
    ]),
  })
