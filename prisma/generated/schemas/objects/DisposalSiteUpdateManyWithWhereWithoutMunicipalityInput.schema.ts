// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteScalarWhereInputObjectSchema } from '../internals'
import { DisposalSiteUpdateManyMutationInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedUpdateManyWithoutDisposalSitesInputObjectSchema } from '../internals'

export const DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema =
  Yup.object({
    where: DisposalSiteScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      DisposalSiteUpdateManyMutationInputObjectSchema,
      DisposalSiteUncheckedUpdateManyWithoutDisposalSitesInputObjectSchema,
    ]),
  })
