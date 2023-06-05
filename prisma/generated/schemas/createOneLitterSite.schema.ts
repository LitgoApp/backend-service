import { z } from 'zod';
import { LitterSiteCreateInputObjectSchema } from './objects/LitterSiteCreateInput.schema';
import { LitterSiteUncheckedCreateInputObjectSchema } from './objects/LitterSiteUncheckedCreateInput.schema';

export const LitterSiteCreateOneSchema = z.object({
  data: z.union([
    LitterSiteCreateInputObjectSchema,
    LitterSiteUncheckedCreateInputObjectSchema,
  ]),
});
