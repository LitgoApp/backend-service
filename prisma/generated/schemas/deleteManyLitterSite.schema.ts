import { z } from 'zod';
import { LitterSiteWhereInputObjectSchema } from './objects/LitterSiteWhereInput.schema';

export const LitterSiteDeleteManySchema = z.object({
  where: LitterSiteWhereInputObjectSchema.optional(),
});
