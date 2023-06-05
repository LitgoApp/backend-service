// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteWhereUniqueInputObjectSchema } from '../internals'
import { DisposalSiteUpdateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema } from '../internals'

export const DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: DisposalSiteWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      DisposalSiteUpdateWithoutMunicipalityInputObjectSchema,
      DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema,
    ]),
  })
