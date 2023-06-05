import { z } from 'zod';

export const LitterSiteScalarFieldEnumSchema = z.enum([
  'litterSiteId',
  'reporterUserId',
  'collectorUserId',
  'isCollected',
  'image',
  'harmful',
  'latitude',
  'longitude',
  'createdAt',
  'updatedAt',
]);
