import { z } from 'zod';
import { MunicipalityUpdateInputObjectSchema } from './objects/MunicipalityUpdateInput.schema';
import { MunicipalityUncheckedUpdateInputObjectSchema } from './objects/MunicipalityUncheckedUpdateInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './objects/MunicipalityWhereUniqueInput.schema';

export const MunicipalityUpdateOneSchema = z.object({
  data: z.union([
    MunicipalityUpdateInputObjectSchema,
    MunicipalityUncheckedUpdateInputObjectSchema,
  ]),
  where: MunicipalityWhereUniqueInputObjectSchema,
});
