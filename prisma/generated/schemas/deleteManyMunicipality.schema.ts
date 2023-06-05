import { z } from 'zod';
import { MunicipalityWhereInputObjectSchema } from './objects/MunicipalityWhereInput.schema';

export const MunicipalityDeleteManySchema = z.object({
  where: MunicipalityWhereInputObjectSchema.optional(),
});
