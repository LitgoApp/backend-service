import { z } from 'zod';

export const RegionPointScalarFieldEnumSchema = z.enum([
  'regionPointId',
  'regionId',
  'latitude',
  'longitude',
  'createdAt',
  'updatedAt',
]);
