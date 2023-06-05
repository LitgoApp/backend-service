import * as Yup from 'yup'

export const DisposalSiteScalarFieldEnumSchema = Yup.mixed().oneOf([
  'disposalSiteId',
  'municipalityId',
  'latitude',
  'longitude',
  'createdAt',
  'updatedAt',
])
