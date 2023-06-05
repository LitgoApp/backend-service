import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './objects/LitterSiteWhereUniqueInput.schema';

export const LitterSiteFindUniqueSchema = z.object({
  where: LitterSiteWhereUniqueInputObjectSchema,
});
