// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteCreateManyCollectorUserInputObjectSchema } from '../internals'

export const LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema =
  Yup.object({
    data: Yup.mixed().oneOfSchemas([
      LitterSiteCreateManyCollectorUserInputObjectSchema,
      Yup.array().of(LitterSiteCreateManyCollectorUserInputObjectSchema),
    ]),
    skipDuplicates: Yup.boolean(),
  })
