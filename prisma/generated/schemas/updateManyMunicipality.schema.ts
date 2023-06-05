import { z } from 'zod';
import { MunicipalityUpdateManyMutationInputObjectSchema } from './objects/MunicipalityUpdateManyMutationInput.schema';
import { MunicipalityWhereInputObjectSchema } from './objects/MunicipalityWhereInput.schema';

export const MunicipalityUpdateManySchema = z.object({
  data: MunicipalityUpdateManyMutationInputObjectSchema,
  where: MunicipalityWhereInputObjectSchema.optional(),
});
