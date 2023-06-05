// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserWhereUniqueInputObjectSchema } from '../internals'
import { UserCreateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from '../internals'

export const UserCreateOrConnectWithoutCollectedLitterInputObjectSchema =
  Yup.object({
    where: UserWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutCollectedLitterInputObjectSchema,
      UserUncheckedCreateWithoutCollectedLitterInputObjectSchema,
    ]),
  })
