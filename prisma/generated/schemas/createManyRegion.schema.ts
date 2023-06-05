import { z } from 'zod';
import { RegionCreateManyInputObjectSchema } from './objects/RegionCreateManyInput.schema';

export const RegionCreateManySchema = z.object({
  data: z.union([
    RegionCreateManyInputObjectSchema,
    z.array(RegionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
