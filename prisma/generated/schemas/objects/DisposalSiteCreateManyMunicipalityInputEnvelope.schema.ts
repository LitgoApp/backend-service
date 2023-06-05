// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteCreateManyMunicipalityInputObjectSchema } from '../internals'

export const DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema =
  Yup.object({
    data: Yup.mixed().oneOfSchemas([
      DisposalSiteCreateManyMunicipalityInputObjectSchema,
      Yup.array().of(DisposalSiteCreateManyMunicipalityInputObjectSchema),
    ]),
    skipDuplicates: Yup.boolean(),
  })
