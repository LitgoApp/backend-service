import { z } from 'zod';
import { RegionPointWhereUniqueInputObjectSchema } from './objects/RegionPointWhereUniqueInput.schema';

export const RegionPointFindUniqueSchema = z.object({
  where: RegionPointWhereUniqueInputObjectSchema,
});
