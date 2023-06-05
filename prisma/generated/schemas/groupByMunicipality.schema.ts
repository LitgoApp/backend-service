import { z } from 'zod';
import { MunicipalityWhereInputObjectSchema } from './objects/MunicipalityWhereInput.schema';
import { MunicipalityOrderByWithAggregationInputObjectSchema } from './objects/MunicipalityOrderByWithAggregationInput.schema';
import { MunicipalityScalarWhereWithAggregatesInputObjectSchema } from './objects/MunicipalityScalarWhereWithAggregatesInput.schema';
import { MunicipalityScalarFieldEnumSchema } from './enums/MunicipalityScalarFieldEnum.schema';

export const MunicipalityGroupBySchema = z.object({
  where: MunicipalityWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MunicipalityOrderByWithAggregationInputObjectSchema,
      MunicipalityOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MunicipalityScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MunicipalityScalarFieldEnumSchema),
});
