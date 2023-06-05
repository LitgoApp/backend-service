import { z } from 'zod';
import { MunicipalityCreateInputObjectSchema } from './objects/MunicipalityCreateInput.schema';
import { MunicipalityUncheckedCreateInputObjectSchema } from './objects/MunicipalityUncheckedCreateInput.schema';

export const MunicipalityCreateOneSchema = z.object({
  data: z.union([
    MunicipalityCreateInputObjectSchema,
    MunicipalityUncheckedCreateInputObjectSchema,
  ]),
});
