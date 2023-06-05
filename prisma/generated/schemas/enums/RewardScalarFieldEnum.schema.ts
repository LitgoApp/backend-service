import * as Yup from 'yup'

export const RewardScalarFieldEnumSchema = Yup.mixed().oneOf([
  'rewardId',
  'name',
  'cost',
  'description',
  'createdAt',
  'updatedAt',
])
