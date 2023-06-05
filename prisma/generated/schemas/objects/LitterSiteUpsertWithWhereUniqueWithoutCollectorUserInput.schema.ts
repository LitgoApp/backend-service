// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteUpdateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from '../internals'

export const LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema =
  Yup.object({
    where: LitterSiteWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateWithoutCollectorUserInputObjectSchema,
      LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      LitterSiteCreateWithoutCollectorUserInputObjectSchema,
      LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
    ]),
  })
