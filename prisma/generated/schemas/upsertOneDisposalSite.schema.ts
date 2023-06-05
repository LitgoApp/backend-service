import { z } from 'zod';
import { DisposalSiteWhereUniqueInputObjectSchema } from './objects/DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteCreateInputObjectSchema } from './objects/DisposalSiteCreateInput.schema';
import { DisposalSiteUncheckedCreateInputObjectSchema } from './objects/DisposalSiteUncheckedCreateInput.schema';
import { DisposalSiteUpdateInputObjectSchema } from './objects/DisposalSiteUpdateInput.schema';
import { DisposalSiteUncheckedUpdateInputObjectSchema } from './objects/DisposalSiteUncheckedUpdateInput.schema';

export const DisposalSiteUpsertSchema = z.object({
  where: DisposalSiteWhereUniqueInputObjectSchema,
  create: z.union([
    DisposalSiteCreateInputObjectSchema,
    DisposalSiteUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DisposalSiteUpdateInputObjectSchema,
    DisposalSiteUncheckedUpdateInputObjectSchema,
  ]),
});
