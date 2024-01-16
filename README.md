set up ps-http-sim https://github.com/mattrobenolt/ps-http-sim

run `pnpm run i`

change db connection settings in `index.ts` and in `drizzle.config.ts`

run `pnpm run db:push`

change `testToRun` value in `index.ts` to switch between tests

run `pnpm run start` to run the test

check logs in ps-http-sim for session token value
