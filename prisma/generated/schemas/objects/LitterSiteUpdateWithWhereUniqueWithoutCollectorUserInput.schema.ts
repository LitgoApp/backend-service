// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteUpdateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema } from '../internals'

export const LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema =
  Yup.object({
    where: LitterSiteWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateWithoutCollectorUserInputObjectSchema,
      LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema,
    ]),
  })
