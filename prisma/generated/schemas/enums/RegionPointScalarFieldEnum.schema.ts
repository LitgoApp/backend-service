import * as Yup from 'yup'

export const RegionPointScalarFieldEnumSchema = Yup.mixed().oneOf([
  'regionPointId',
  'regionId',
  'latitude',
  'longitude',
  'createdAt',
  'updatedAt',
])
