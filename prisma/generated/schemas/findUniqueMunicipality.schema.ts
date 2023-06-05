import { z } from 'zod';
import { MunicipalityWhereUniqueInputObjectSchema } from './objects/MunicipalityWhereUniqueInput.schema';

export const MunicipalityFindUniqueSchema = z.object({
  where: MunicipalityWhereUniqueInputObjectSchema,
});
