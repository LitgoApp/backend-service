import * as Yup from 'yup'

export const TransactionIsolationLevelSchema = Yup.mixed().oneOf([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
])
