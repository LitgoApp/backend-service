// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema } from '../internals'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'

export const LitterSiteCreateNestedManyWithoutReporterUserInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      LitterSiteCreateWithoutReporterUserInputObjectSchema,
      Yup.array().of(LitterSiteCreateWithoutReporterUserInputObjectSchema),
      LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema
      ),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema,
      Yup.array().of(
        LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema
      ),
    ]),
    createMany: LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      LitterSiteWhereUniqueInputObjectSchema,
      Yup.array().of(LitterSiteWhereUniqueInputObjectSchema),
    ]),
  })
