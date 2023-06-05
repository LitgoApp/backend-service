// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals'
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals'
import { LitterSiteUpdateManyWithoutCollectorUserNestedInputObjectSchema } from '../internals'

export const UserUpdateWithoutReportedLitterInputObjectSchema = Yup.object({
  userId: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  email: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  name: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  password: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  level: Yup.mixed().oneOfSchemas([
    Yup.number(),
    IntFieldUpdateOperationsInputObjectSchema,
  ]),
  points: Yup.mixed().oneOfSchemas([
    Yup.number(),
    IntFieldUpdateOperationsInputObjectSchema,
  ]),
  fraudLevel: Yup.mixed().oneOfSchemas([
    Yup.number(),
    IntFieldUpdateOperationsInputObjectSchema,
  ]),
  address: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  collectedLitter:
    LitterSiteUpdateManyWithoutCollectorUserNestedInputObjectSchema,
})
