import { z } from 'zod';
import { RegionUpdateManyMutationInputObjectSchema } from './objects/RegionUpdateManyMutationInput.schema';
import { RegionWhereInputObjectSchema } from './objects/RegionWhereInput.schema';

export const RegionUpdateManySchema = z.object({
  data: RegionUpdateManyMutationInputObjectSchema,
  where: RegionWhereInputObjectSchema.optional(),
});
