import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './objects/RegionWhereUniqueInput.schema';
import { RegionCreateInputObjectSchema } from './objects/RegionCreateInput.schema';
import { RegionUncheckedCreateInputObjectSchema } from './objects/RegionUncheckedCreateInput.schema';
import { RegionUpdateInputObjectSchema } from './objects/RegionUpdateInput.schema';
import { RegionUncheckedUpdateInputObjectSchema } from './objects/RegionUncheckedUpdateInput.schema';

export const RegionUpsertSchema = z.object({
  where: RegionWhereUniqueInputObjectSchema,
  create: z.union([
    RegionCreateInputObjectSchema,
    RegionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RegionUpdateInputObjectSchema,
    RegionUncheckedUpdateInputObjectSchema,
  ]),
});
