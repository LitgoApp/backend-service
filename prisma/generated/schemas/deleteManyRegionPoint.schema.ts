import { z } from 'zod';
import { RegionPointWhereInputObjectSchema } from './objects/RegionPointWhereInput.schema';

export const RegionPointDeleteManySchema = z.object({
  where: RegionPointWhereInputObjectSchema.optional(),
});
