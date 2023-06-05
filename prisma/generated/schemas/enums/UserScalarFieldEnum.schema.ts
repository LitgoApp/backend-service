import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'userId',
  'email',
  'name',
  'password',
  'level',
  'points',
  'fraudLevel',
  'address',
  'createdAt',
  'updatedAt',
]);
