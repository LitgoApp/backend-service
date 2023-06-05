// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema } from '../internals'
import { LitterSiteWhereUniqueInputObjectSchema } from '../internals'
import { LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema } from '../internals'
import { LitterSiteScalarWhereInputObjectSchema } from '../internals'

export const LitterSiteUncheckedUpdateManyWithoutCollectorUserNestedInputObjectSchema =
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
    upsert: Yup.mixed().oneOfSchemas([
      LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema
      ),
    ]),
    createMany: LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema,
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
      LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema,
      Yup.array().of(
        LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema
      ),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      LitterSiteScalarWhereInputObjectSchema,
      Yup.array().of(LitterSiteScalarWhereInputObjectSchema),
    ]),
  })
