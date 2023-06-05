// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { IntWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const UserScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  userId: Yup.mixed().oneOfSchemas([
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
  level: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  points: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  fraudLevel: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  address: Yup.mixed().oneOfSchemas([
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
