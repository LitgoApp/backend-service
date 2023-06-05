// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema } from '../internals'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema } from '../internals'
import { LitterSiteScalarWhereInputObjectSchema } from '../internals'

export const LitterSiteUncheckedUpdateManyWithoutReporterUserNestedInputObjectSchema =
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
    upsert: Yup.mixed().oneOfSchemas([
      LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema
      ),
    ]),
    createMany: LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema,
    set: Yup.mixed().oneOfSchemas([
      LitterSiteWhereUniqueInputObjectSchema,
      Yup.array().of(LitterSiteWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      LitterSiteWhereUniqueInputObjectSchema,
      Yup.array().of(LitterSiteWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      LitterSiteWhereUniqueInputObjectSchema,
      Yup.array().of(LitterSiteWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      LitterSiteWhereUniqueInputObjectSchema,
      Yup.array().of(LitterSiteWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema
      ),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      LitterSiteScalarWhereInputObjectSchema,
      Yup.array().of(LitterSiteScalarWhereInputObjectSchema),
    ]),
  })
