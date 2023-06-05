import { z } from 'zod';
import { RegionPointWhereUniqueInputObjectSchema } from './objects/RegionPointWhereUniqueInput.schema';

export const RegionPointDeleteOneSchema = z.object({
  where: RegionPointWhereUniqueInputObjectSchema,
});
