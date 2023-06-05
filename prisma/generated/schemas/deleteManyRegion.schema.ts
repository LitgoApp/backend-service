import { z } from 'zod';
import { RegionWhereInputObjectSchema } from './objects/RegionWhereInput.schema';

export const RegionDeleteManySchema = z.object({
  where: RegionWhereInputObjectSchema.optional(),
});
