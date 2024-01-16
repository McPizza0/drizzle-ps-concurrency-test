// This file is only used for DrizzleKit migrations

import type { Config } from 'drizzle-kit'

export default {
  schema: 'src/schema.ts',
  out: './migrations',
  driver: 'mysql2',
  dbCredentials: {
    uri: 'mysql://root:@localhost:3306/planetscale',
  },
} satisfies Config
