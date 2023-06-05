import { z } from 'zod';
import { RegionUpdateInputObjectSchema } from './objects/RegionUpdateInput.schema';
import { RegionUncheckedUpdateInputObjectSchema } from './objects/RegionUncheckedUpdateInput.schema';
import { RegionWhereUniqueInputObjectSchema } from './objects/RegionWhereUniqueInput.schema';

export const RegionUpdateOneSchema = z.object({
  data: z.union([
    RegionUpdateInputObjectSchema,
    RegionUncheckedUpdateInputObjectSchema,
  ]),
  where: RegionWhereUniqueInputObjectSchema,
});
