// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserWhereUniqueInputObjectSchema } from '../internals'
import { UserCreateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from '../internals'

export const UserCreateOrConnectWithoutReportedLitterInputObjectSchema =
  Yup.object({
    where: UserWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutReportedLitterInputObjectSchema,
      UserUncheckedCreateWithoutReportedLitterInputObjectSchema,
    ]),
  })
