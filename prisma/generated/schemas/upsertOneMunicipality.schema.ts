import { z } from 'zod';
import { MunicipalityWhereUniqueInputObjectSchema } from './objects/MunicipalityWhereUniqueInput.schema';
import { MunicipalityCreateInputObjectSchema } from './objects/MunicipalityCreateInput.schema';
import { MunicipalityUncheckedCreateInputObjectSchema } from './objects/MunicipalityUncheckedCreateInput.schema';
import { MunicipalityUpdateInputObjectSchema } from './objects/MunicipalityUpdateInput.schema';
import { MunicipalityUncheckedUpdateInputObjectSchema } from './objects/MunicipalityUncheckedUpdateInput.schema';

export const MunicipalityUpsertSchema = z.object({
  where: MunicipalityWhereUniqueInputObjectSchema,
  create: z.union([
    MunicipalityCreateInputObjectSchema,
    MunicipalityUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MunicipalityUpdateInputObjectSchema,
    MunicipalityUncheckedUpdateInputObjectSchema,
  ]),
});
