// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserCreateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserCreateOrConnectWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUpsertWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserWhereUniqueInputObjectSchema } from '../internals'
import { UserUpdateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema } from '../internals'

export const UserUpdateOneWithoutCollectedLitterNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutCollectedLitterInputObjectSchema,
      UserUncheckedCreateWithoutCollectedLitterInputObjectSchema,
    ]),
    connectOrCreate: UserCreateOrConnectWithoutCollectedLitterInputObjectSchema,
    upsert: UserUpsertWithoutCollectedLitterInputObjectSchema,
    disconnect: Yup.boolean(),
    delete: Yup.boolean(),
    connect: UserWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutCollectedLitterInputObjectSchema,
      UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema,
    ]),
  })
