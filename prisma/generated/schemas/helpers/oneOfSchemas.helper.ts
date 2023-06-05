import * as Yup from 'yup'

Yup.addMethod(
  Yup.MixedSchema,
  'oneOfSchemas',
  function (schemas: Yup.AnySchema[]) {
    return this.test(
      'one-of-schemas',
      'Not all items in ${path} match one of the allowed schemas',
      (item) =>
        schemas.some((schema) => schema.isValidSync(item, { strict: true }))
    )
  }
)
