// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserCreateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserCreateOrConnectWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUpsertWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserWhereUniqueInputObjectSchema } from '../internals'
import { UserUpdateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUncheckedUpdateWithoutReportedLitterInputObjectSchema } from '../internals'

export const UserUpdateOneRequiredWithoutReportedLitterNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutReportedLitterInputObjectSchema,
      UserUncheckedCreateWithoutReportedLitterInputObjectSchema,
    ]),
    connectOrCreate: UserCreateOrConnectWithoutReportedLitterInputObjectSchema,
    upsert: UserUpsertWithoutReportedLitterInputObjectSchema,
    connect: UserWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutReportedLitterInputObjectSchema,
      UserUncheckedUpdateWithoutReportedLitterInputObjectSchema,
    ]),
  })
