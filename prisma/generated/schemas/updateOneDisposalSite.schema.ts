import { z } from 'zod';
import { DisposalSiteUpdateInputObjectSchema } from './objects/DisposalSiteUpdateInput.schema';
import { DisposalSiteUncheckedUpdateInputObjectSchema } from './objects/DisposalSiteUncheckedUpdateInput.schema';
import { DisposalSiteWhereUniqueInputObjectSchema } from './objects/DisposalSiteWhereUniqueInput.schema';

export const DisposalSiteUpdateOneSchema = z.object({
  data: z.union([
    DisposalSiteUpdateInputObjectSchema,
    DisposalSiteUncheckedUpdateInputObjectSchema,
  ]),
  where: DisposalSiteWhereUniqueInputObjectSchema,
});
