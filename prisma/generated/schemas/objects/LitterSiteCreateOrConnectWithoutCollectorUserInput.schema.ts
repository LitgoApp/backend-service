// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from '../internals'

export const LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema =
  Yup.object({
    where: LitterSiteWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      LitterSiteCreateWithoutCollectorUserInputObjectSchema,
      LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
    ]),
  })
