import { z } from 'zod';
import { MunicipalityOrderByWithRelationInputObjectSchema } from './objects/MunicipalityOrderByWithRelationInput.schema';
import { MunicipalityWhereInputObjectSchema } from './objects/MunicipalityWhereInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './objects/MunicipalityWhereUniqueInput.schema';
import { MunicipalityCountAggregateInputObjectSchema } from './objects/MunicipalityCountAggregateInput.schema';
import { MunicipalityMinAggregateInputObjectSchema } from './objects/MunicipalityMinAggregateInput.schema';
import { MunicipalityMaxAggregateInputObjectSchema } from './objects/MunicipalityMaxAggregateInput.schema';

export const MunicipalityAggregateSchema = z.object({
  orderBy: z
    .union([
      MunicipalityOrderByWithRelationInputObjectSchema,
      MunicipalityOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MunicipalityWhereInputObjectSchema.optional(),
  cursor: MunicipalityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MunicipalityCountAggregateInputObjectSchema])
    .optional(),
  _min: MunicipalityMinAggregateInputObjectSchema.optional(),
  _max: MunicipalityMaxAggregateInputObjectSchema.optional(),
});
