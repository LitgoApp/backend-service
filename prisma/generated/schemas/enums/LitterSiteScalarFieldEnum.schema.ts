import * as Yup from 'yup'

export const LitterSiteScalarFieldEnumSchema = Yup.mixed().oneOf([
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
])
