// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserUpdateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserCreateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from '../internals'

export const UserUpsertWithoutCollectedLitterInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    UserUpdateWithoutCollectedLitterInputObjectSchema,
    UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutCollectedLitterInputObjectSchema,
    UserUncheckedCreateWithoutCollectedLitterInputObjectSchema,
  ]),
})
