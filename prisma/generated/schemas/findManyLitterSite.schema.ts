import { z } from 'zod';
import { LitterSiteOrderByWithRelationInputObjectSchema } from './objects/LitterSiteOrderByWithRelationInput.schema';
import { LitterSiteWhereInputObjectSchema } from './objects/LitterSiteWhereInput.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './objects/LitterSiteWhereUniqueInput.schema';
import { LitterSiteScalarFieldEnumSchema } from './enums/LitterSiteScalarFieldEnum.schema';

export const LitterSiteFindManySchema = z.object({
  orderBy: z
    .union([
      LitterSiteOrderByWithRelationInputObjectSchema,
      LitterSiteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LitterSiteWhereInputObjectSchema.optional(),
  cursor: LitterSiteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LitterSiteScalarFieldEnumSchema).optional(),
});
