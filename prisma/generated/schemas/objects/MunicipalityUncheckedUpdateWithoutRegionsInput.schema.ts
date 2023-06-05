// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DisposalSiteUncheckedUpdateManyWithoutMunicipalityNestedInputObjectSchema } from '../internals'

export const MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema =
  Yup.object({
    municipalityId: Yup.mixed().oneOfSchemas([
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
    phoneNumber: Yup.mixed().oneOfSchemas([
      Yup.string(),
      StringFieldUpdateOperationsInputObjectSchema,
    ]),
    createdAt: Yup.mixed().oneOfSchemas([
      DateTimeFieldUpdateOperationsInputObjectSchema,
    ]),
    updatedAt: Yup.mixed().oneOfSchemas([
      DateTimeFieldUpdateOperationsInputObjectSchema,
    ]),
    disposalSites:
      DisposalSiteUncheckedUpdateManyWithoutMunicipalityNestedInputObjectSchema,
  })
