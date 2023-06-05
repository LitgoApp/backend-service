// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteScalarWhereInputObjectSchema } from '../internals'
import { LitterSiteUpdateManyMutationInputObjectSchema } from '../internals'
import { LitterSiteUncheckedUpdateManyWithoutCollectedLitterInputObjectSchema } from '../internals'

export const LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema =
  Yup.object({
    where: LitterSiteScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateManyMutationInputObjectSchema,
      LitterSiteUncheckedUpdateManyWithoutCollectedLitterInputObjectSchema,
    ]),
  })
