import * as Yup from 'yup'

export const QueryModeSchema = Yup.mixed().oneOf(['default', 'insensitive'])
