import { z } from 'zod';

export const RegionScalarFieldEnumSchema = z.enum([
  'regionId',
  'municipalityId',
  'createdAt',
  'updatedAt',
]);
