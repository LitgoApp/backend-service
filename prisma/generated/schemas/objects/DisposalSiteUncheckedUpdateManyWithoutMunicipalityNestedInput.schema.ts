// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema } from '../internals'
import { DisposalSiteWhereUniqueInputObjectSchema } from '../internals'
import { DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteScalarWhereInputObjectSchema } from '../internals'

export const DisposalSiteUncheckedUpdateManyWithoutMunicipalityNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      DisposalSiteCreateWithoutMunicipalityInputObjectSchema,
      Yup.array().of(DisposalSiteCreateWithoutMunicipalityInputObjectSchema),
      DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema
      ),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema
      ),
    ]),
    upsert: Yup.mixed().oneOfSchemas([
      DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema
      ),
    ]),
    createMany: DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema,
    set: Yup.mixed().oneOfSchemas([
      DisposalSiteWhereUniqueInputObjectSchema,
      Yup.array().of(DisposalSiteWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      DisposalSiteWhereUniqueInputObjectSchema,
      Yup.array().of(DisposalSiteWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      DisposalSiteWhereUniqueInputObjectSchema,
      Yup.array().of(DisposalSiteWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      DisposalSiteWhereUniqueInputObjectSchema,
      Yup.array().of(DisposalSiteWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema,
      Yup.array().of(
        DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema
      ),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      DisposalSiteScalarWhereInputObjectSchema,
      Yup.array().of(DisposalSiteScalarWhereInputObjectSchema),
    ]),
  })
