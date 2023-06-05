import { z } from 'zod';
import { DisposalSiteWhereInputObjectSchema } from './objects/DisposalSiteWhereInput.schema';

export const DisposalSiteDeleteManySchema = z.object({
  where: DisposalSiteWhereInputObjectSchema.optional(),
});
