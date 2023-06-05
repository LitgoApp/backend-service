import { z } from 'zod';
import { RegionCreateInputObjectSchema } from './objects/RegionCreateInput.schema';
import { RegionUncheckedCreateInputObjectSchema } from './objects/RegionUncheckedCreateInput.schema';

export const RegionCreateOneSchema = z.object({
  data: z.union([
    RegionCreateInputObjectSchema,
    RegionUncheckedCreateInputObjectSchema,
  ]),
});
