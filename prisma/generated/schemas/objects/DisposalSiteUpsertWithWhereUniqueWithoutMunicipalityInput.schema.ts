// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteWhereUniqueInputObjectSchema } from '../internals'
import { DisposalSiteUpdateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'

export const DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: DisposalSiteWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      DisposalSiteUpdateWithoutMunicipalityInputObjectSchema,
      DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      DisposalSiteCreateWithoutMunicipalityInputObjectSchema,
      DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
    ]),
  })
