import { z } from 'zod';

export const RewardScalarFieldEnumSchema = z.enum([
  'rewardId',
  'name',
  'cost',
  'description',
  'createdAt',
  'updatedAt',
]);
