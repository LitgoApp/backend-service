import { z } from 'zod';

export const DisposalSiteScalarFieldEnumSchema = z.enum([
  'disposalSiteId',
  'municipalityId',
  'latitude',
  'longitude',
  'createdAt',
  'updatedAt',
]);
