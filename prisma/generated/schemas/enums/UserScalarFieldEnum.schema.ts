import * as Yup from 'yup'

export const UserScalarFieldEnumSchema = Yup.mixed().oneOf([
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
])
