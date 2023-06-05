import { z } from 'zod';
import { MunicipalityCreateManyInputObjectSchema } from './objects/MunicipalityCreateManyInput.schema';

export const MunicipalityCreateManySchema = z.object({
  data: z.union([
    MunicipalityCreateManyInputObjectSchema,
    z.array(MunicipalityCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
