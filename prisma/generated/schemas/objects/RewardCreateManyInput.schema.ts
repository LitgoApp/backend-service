// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const RewardCreateManyInputObjectSchema = Yup.object({
  rewardId: Yup.string(),
  name: Yup.string().required(),
  cost: Yup.number().required(),
  description: Yup.string().required(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
})
