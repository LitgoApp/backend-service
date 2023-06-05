import { z } from 'zod';
import { DisposalSiteCreateInputObjectSchema } from './objects/DisposalSiteCreateInput.schema';
import { DisposalSiteUncheckedCreateInputObjectSchema } from './objects/DisposalSiteUncheckedCreateInput.schema';

export const DisposalSiteCreateOneSchema = z.object({
  data: z.union([
    DisposalSiteCreateInputObjectSchema,
    DisposalSiteUncheckedCreateInputObjectSchema,
  ]),
});
