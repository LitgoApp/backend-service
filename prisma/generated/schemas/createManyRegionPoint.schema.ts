import { z } from 'zod';
import { RegionPointCreateManyInputObjectSchema } from './objects/RegionPointCreateManyInput.schema';

export const RegionPointCreateManySchema = z.object({
  data: z.union([
    RegionPointCreateManyInputObjectSchema,
    z.array(RegionPointCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
