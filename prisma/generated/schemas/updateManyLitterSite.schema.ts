import { z } from 'zod';
import { LitterSiteUpdateManyMutationInputObjectSchema } from './objects/LitterSiteUpdateManyMutationInput.schema';
import { LitterSiteWhereInputObjectSchema } from './objects/LitterSiteWhereInput.schema';

export const LitterSiteUpdateManySchema = z.object({
  data: LitterSiteUpdateManyMutationInputObjectSchema,
  where: LitterSiteWhereInputObjectSchema.optional(),
});
