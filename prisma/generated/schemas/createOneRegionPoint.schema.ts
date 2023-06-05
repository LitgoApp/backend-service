import { z } from 'zod';
import { RegionPointCreateInputObjectSchema } from './objects/RegionPointCreateInput.schema';
import { RegionPointUncheckedCreateInputObjectSchema } from './objects/RegionPointUncheckedCreateInput.schema';

export const RegionPointCreateOneSchema = z.object({
  data: z.union([
    RegionPointCreateInputObjectSchema,
    RegionPointUncheckedCreateInputObjectSchema,
  ]),
});
