import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './objects/LitterSiteWhereUniqueInput.schema';
import { LitterSiteCreateInputObjectSchema } from './objects/LitterSiteCreateInput.schema';
import { LitterSiteUncheckedCreateInputObjectSchema } from './objects/LitterSiteUncheckedCreateInput.schema';
import { LitterSiteUpdateInputObjectSchema } from './objects/LitterSiteUpdateInput.schema';
import { LitterSiteUncheckedUpdateInputObjectSchema } from './objects/LitterSiteUncheckedUpdateInput.schema';

export const LitterSiteUpsertSchema = z.object({
  where: LitterSiteWhereUniqueInputObjectSchema,
  create: z.union([
    LitterSiteCreateInputObjectSchema,
    LitterSiteUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LitterSiteUpdateInputObjectSchema,
    LitterSiteUncheckedUpdateInputObjectSchema,
  ]),
});
