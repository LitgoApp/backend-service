import { z } from 'zod';
import { LitterSiteUpdateInputObjectSchema } from './objects/LitterSiteUpdateInput.schema';
import { LitterSiteUncheckedUpdateInputObjectSchema } from './objects/LitterSiteUncheckedUpdateInput.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './objects/LitterSiteWhereUniqueInput.schema';

export const LitterSiteUpdateOneSchema = z.object({
  data: z.union([
    LitterSiteUpdateInputObjectSchema,
    LitterSiteUncheckedUpdateInputObjectSchema,
  ]),
  where: LitterSiteWhereUniqueInputObjectSchema,
});
