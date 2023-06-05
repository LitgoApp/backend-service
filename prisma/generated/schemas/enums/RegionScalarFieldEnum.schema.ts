import * as Yup from 'yup'

export const RegionScalarFieldEnumSchema = Yup.mixed().oneOf([
  'regionId',
  'municipalityId',
  'createdAt',
  'updatedAt',
])
