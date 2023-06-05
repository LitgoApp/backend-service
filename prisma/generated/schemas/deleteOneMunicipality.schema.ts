import { z } from 'zod';
import { MunicipalityWhereUniqueInputObjectSchema } from './objects/MunicipalityWhereUniqueInput.schema';

export const MunicipalityDeleteOneSchema = z.object({
  where: MunicipalityWhereUniqueInputObjectSchema,
});
