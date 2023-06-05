import { z } from 'zod';
import { DisposalSiteUpdateManyMutationInputObjectSchema } from './objects/DisposalSiteUpdateManyMutationInput.schema';
import { DisposalSiteWhereInputObjectSchema } from './objects/DisposalSiteWhereInput.schema';

export const DisposalSiteUpdateManySchema = z.object({
  data: DisposalSiteUpdateManyMutationInputObjectSchema,
  where: DisposalSiteWhereInputObjectSchema.optional(),
});
