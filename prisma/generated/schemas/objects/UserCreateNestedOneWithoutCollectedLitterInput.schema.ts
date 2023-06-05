// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { UserCreateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserCreateOrConnectWithoutCollectedLitterInputObjectSchema } from '../internals'
import { UserWhereUniqueInputObjectSchema } from '../internals'

export const UserCreateNestedOneWithoutCollectedLitterInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutCollectedLitterInputObjectSchema,
      UserUncheckedCreateWithoutCollectedLitterInputObjectSchema,
    ]),
    connectOrCreate: UserCreateOrConnectWithoutCollectedLitterInputObjectSchema,
    connect: UserWhereUniqueInputObjectSchema,
  })
