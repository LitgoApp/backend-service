import { z } from 'zod';
import { DisposalSiteWhereUniqueInputObjectSchema } from './objects/DisposalSiteWhereUniqueInput.schema';

export const DisposalSiteDeleteOneSchema = z.object({
  where: DisposalSiteWhereUniqueInputObjectSchema,
});
