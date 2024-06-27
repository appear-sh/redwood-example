import { createVercelMiddleware } from '@appear.sh/introspector/integrations/redwoodjs'

export const withAppear = createVercelMiddleware({
  // api key you can obtain at https://app.appear.sh/settings
  apiKey: process.env.APPEAR_API_KEY,
  // any identifier of enviroment you prefer,
  // we recommend to at least separate production/staging/development using process.env.NODE_ENV
  environment: process.env.APPEAR_ENV,
})
