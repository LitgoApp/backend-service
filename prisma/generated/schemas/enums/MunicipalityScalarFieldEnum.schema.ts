import { z } from 'zod';

export const MunicipalityScalarFieldEnumSchema = z.enum([
  'municipalityId',
  'email',
  'name',
  'password',
  'phoneNumber',
  'createdAt',
  'updatedAt',
]);
