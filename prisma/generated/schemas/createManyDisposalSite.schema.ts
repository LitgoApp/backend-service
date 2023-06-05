import { z } from 'zod';
import { DisposalSiteCreateManyInputObjectSchema } from './objects/DisposalSiteCreateManyInput.schema';

export const DisposalSiteCreateManySchema = z.object({
  data: z.union([
    DisposalSiteCreateManyInputObjectSchema,
    z.array(DisposalSiteCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
