import { z } from 'zod';
import { RegionPointUpdateInputObjectSchema } from './objects/RegionPointUpdateInput.schema';
import { RegionPointUncheckedUpdateInputObjectSchema } from './objects/RegionPointUncheckedUpdateInput.schema';
import { RegionPointWhereUniqueInputObjectSchema } from './objects/RegionPointWhereUniqueInput.schema';

export const RegionPointUpdateOneSchema = z.object({
  data: z.union([
    RegionPointUpdateInputObjectSchema,
    RegionPointUncheckedUpdateInputObjectSchema,
  ]),
  where: RegionPointWhereUniqueInputObjectSchema,
});
