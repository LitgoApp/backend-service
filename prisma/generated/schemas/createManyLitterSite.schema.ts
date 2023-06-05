import { z } from 'zod';
import { LitterSiteCreateManyInputObjectSchema } from './objects/LitterSiteCreateManyInput.schema';

export const LitterSiteCreateManySchema = z.object({
  data: z.union([
    LitterSiteCreateManyInputObjectSchema,
    z.array(LitterSiteCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
