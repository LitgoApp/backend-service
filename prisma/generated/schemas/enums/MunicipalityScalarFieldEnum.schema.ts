import * as Yup from 'yup'

export const MunicipalityScalarFieldEnumSchema = Yup.mixed().oneOf([
  'municipalityId',
  'email',
  'name',
  'password',
  'phoneNumber',
  'createdAt',
  'updatedAt',
])
