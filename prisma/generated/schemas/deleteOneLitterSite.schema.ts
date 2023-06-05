import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './objects/LitterSiteWhereUniqueInput.schema';

export const LitterSiteDeleteOneSchema = z.object({
  where: LitterSiteWhereUniqueInputObjectSchema,
});
