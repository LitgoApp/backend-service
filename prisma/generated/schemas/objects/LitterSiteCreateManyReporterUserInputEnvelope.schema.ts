// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteCreateManyReporterUserInputObjectSchema } from '../internals'

export const LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema =
  Yup.object({
    data: Yup.mixed().oneOfSchemas([
      LitterSiteCreateManyReporterUserInputObjectSchema,
      Yup.array().of(LitterSiteCreateManyReporterUserInputObjectSchema),
    ]),
    skipDuplicates: Yup.boolean(),
  })
