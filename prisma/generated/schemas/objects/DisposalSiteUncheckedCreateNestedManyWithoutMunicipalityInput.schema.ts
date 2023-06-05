// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema } from '../internals'
import { DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema } from '../internals'
import { DisposalSiteWhereUniqueInputObjectSchema } from '../internals'

export const DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema =
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
    createMany: DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      DisposalSiteWhereUniqueInputObjectSchema,
      Yup.array().of(DisposalSiteWhereUniqueInputObjectSchema),
    ]),
  })
