// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserCreateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserCreateOrConnectWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserWhereUniqueInputObjectSchema } from '../internals'

export const UserCreateNestedOneWithoutReportedLitterInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutReportedLitterInputObjectSchema,
      UserUncheckedCreateWithoutReportedLitterInputObjectSchema,
    ]),
    connectOrCreate: UserCreateOrConnectWithoutReportedLitterInputObjectSchema,
    connect: UserWhereUniqueInputObjectSchema,
  })
