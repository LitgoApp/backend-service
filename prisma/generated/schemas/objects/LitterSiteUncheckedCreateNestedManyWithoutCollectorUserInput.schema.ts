// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema } from '../internals'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'

export const LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      LitterSiteCreateWithoutCollectorUserInputObjectSchema,
      Yup.array().of(LitterSiteCreateWithoutCollectorUserInputObjectSchema),
      LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema
      ),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema,
      Yup.array().of(
        LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema
      ),
    ]),
    createMany: LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      LitterSiteWhereUniqueInputObjectSchema,
      Yup.array().of(LitterSiteWhereUniqueInputObjectSchema),
    ]),
  })
