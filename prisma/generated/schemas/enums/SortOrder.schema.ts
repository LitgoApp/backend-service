import * as Yup from 'yup'

export const SortOrderSchema = Yup.mixed().oneOf(['asc', 'desc'])
