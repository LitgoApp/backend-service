// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals'
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals'
import { BytesFieldUpdateOperationsInputObjectSchema } from '../internals'
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals'
import { UserUpdateOneWithoutCollectedLitterNestedInputObjectSchema } from '../internals'

export const LitterSiteUpdateWithoutReporterUserInputObjectSchema = Yup.object({
  litterSiteId: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  isCollected: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    BoolFieldUpdateOperationsInputObjectSchema,
  ]),
  image: Yup.mixed().oneOfSchemas([
    BytesFieldUpdateOperationsInputObjectSchema,
  ]),
  harmful: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    BoolFieldUpdateOperationsInputObjectSchema,
  ]),
  latitude: Yup.mixed().oneOfSchemas([
    Yup.number(),
    FloatFieldUpdateOperationsInputObjectSchema,
  ]),
  longitude: Yup.mixed().oneOfSchemas([
    Yup.number(),
    FloatFieldUpdateOperationsInputObjectSchema,
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  collectorUser: UserUpdateOneWithoutCollectedLitterNestedInputObjectSchema,
})
