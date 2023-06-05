import { z } from 'zod';
import { MunicipalityOrderByWithRelationInputObjectSchema } from './objects/MunicipalityOrderByWithRelationInput.schema';
import { MunicipalityWhereInputObjectSchema } from './objects/MunicipalityWhereInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './objects/MunicipalityWhereUniqueInput.schema';
import { MunicipalityScalarFieldEnumSchema } from './enums/MunicipalityScalarFieldEnum.schema';

export const MunicipalityFindFirstSchema = z.object({
  orderBy: z
    .union([
      MunicipalityOrderByWithRelationInputObjectSchema,
      MunicipalityOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MunicipalityWhereInputObjectSchema.optional(),
  cursor: MunicipalityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MunicipalityScalarFieldEnumSchema).optional(),
});
