// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserUpdateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUncheckedUpdateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserCreateWithoutReportedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from '../internals'

export const UserUpsertWithoutReportedLitterInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    UserUpdateWithoutReportedLitterInputObjectSchema,
    UserUncheckedUpdateWithoutReportedLitterInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutReportedLitterInputObjectSchema,
    UserUncheckedCreateWithoutReportedLitterInputObjectSchema,
  ]),
})
