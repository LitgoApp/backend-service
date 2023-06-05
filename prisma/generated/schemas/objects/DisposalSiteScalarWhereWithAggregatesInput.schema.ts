// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { FloatWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const DisposalSiteScalarWhereWithAggregatesInputObjectSchema =
  Yup.object({
    AND: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        DisposalSiteScalarWhereWithAggregatesInputObjectSchema.default(
          undefined
        )
      ),
      Yup.array().of(
        Yup.lazy(() =>
          DisposalSiteScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    OR: Yup.array().of(
      Yup.lazy(() =>
        DisposalSiteScalarWhereWithAggregatesInputObjectSchema.default(
          undefined
        )
      )
    ),
    NOT: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        DisposalSiteScalarWhereWithAggregatesInputObjectSchema.default(
          undefined
        )
      ),
      Yup.array().of(
        Yup.lazy(() =>
          DisposalSiteScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    disposalSiteId: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    municipalityId: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    latitude: Yup.mixed().oneOfSchemas([
      FloatWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    longitude: Yup.mixed().oneOfSchemas([
      FloatWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    createdAt: Yup.mixed().oneOfSchemas([
      DateTimeWithAggregatesFilterObjectSchema,
    ]),
    updatedAt: Yup.mixed().oneOfSchemas([
      DateTimeWithAggregatesFilterObjectSchema,
    ]),
  })
