import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './objects/RegionWhereUniqueInput.schema';

export const RegionFindUniqueSchema = z.object({
  where: RegionWhereUniqueInputObjectSchema,
});
