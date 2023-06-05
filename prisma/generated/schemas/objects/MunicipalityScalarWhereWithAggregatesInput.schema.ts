// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const MunicipalityScalarWhereWithAggregatesInputObjectSchema =
  Yup.object({
    AND: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        MunicipalityScalarWhereWithAggregatesInputObjectSchema.default(
          undefined
        )
      ),
      Yup.array().of(
        Yup.lazy(() =>
          MunicipalityScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    OR: Yup.array().of(
      Yup.lazy(() =>
        MunicipalityScalarWhereWithAggregatesInputObjectSchema.default(
          undefined
        )
      )
    ),
    NOT: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        MunicipalityScalarWhereWithAggregatesInputObjectSchema.default(
          undefined
        )
      ),
      Yup.array().of(
        Yup.lazy(() =>
          MunicipalityScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    municipalityId: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    email: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    name: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    password: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    phoneNumber: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    createdAt: Yup.mixed().oneOfSchemas([
      DateTimeWithAggregatesFilterObjectSchema,
    ]),
    updatedAt: Yup.mixed().oneOfSchemas([
      DateTimeWithAggregatesFilterObjectSchema,
    ]),
  })
