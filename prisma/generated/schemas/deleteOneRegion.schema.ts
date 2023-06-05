import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './objects/RegionWhereUniqueInput.schema';

export const RegionDeleteOneSchema = z.object({
  where: RegionWhereUniqueInputObjectSchema,
});
