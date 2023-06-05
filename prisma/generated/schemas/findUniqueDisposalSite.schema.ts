import { z } from 'zod';
import { DisposalSiteWhereUniqueInputObjectSchema } from './objects/DisposalSiteWhereUniqueInput.schema';

export const DisposalSiteFindUniqueSchema = z.object({
  where: DisposalSiteWhereUniqueInputObjectSchema,
});
