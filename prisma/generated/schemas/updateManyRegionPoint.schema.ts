import { z } from 'zod';
import { RegionPointUpdateManyMutationInputObjectSchema } from './objects/RegionPointUpdateManyMutationInput.schema';
import { RegionPointWhereInputObjectSchema } from './objects/RegionPointWhereInput.schema';

export const RegionPointUpdateManySchema = z.object({
  data: RegionPointUpdateManyMutationInputObjectSchema,
  where: RegionPointWhereInputObjectSchema.optional(),
});
