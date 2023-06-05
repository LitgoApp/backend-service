import { z } from 'zod';
import { RegionPointWhereUniqueInputObjectSchema } from './objects/RegionPointWhereUniqueInput.schema';
import { RegionPointCreateInputObjectSchema } from './objects/RegionPointCreateInput.schema';
import { RegionPointUncheckedCreateInputObjectSchema } from './objects/RegionPointUncheckedCreateInput.schema';
import { RegionPointUpdateInputObjectSchema } from './objects/RegionPointUpdateInput.schema';
import { RegionPointUncheckedUpdateInputObjectSchema } from './objects/RegionPointUncheckedUpdateInput.schema';

export const RegionPointUpsertSchema = z.object({
  where: RegionPointWhereUniqueInputObjectSchema,
  create: z.union([
    RegionPointCreateInputObjectSchema,
    RegionPointUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RegionPointUpdateInputObjectSchema,
    RegionPointUncheckedUpdateInputObjectSchema,
  ]),
});
