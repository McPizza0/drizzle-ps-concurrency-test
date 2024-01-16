import { Client, connect } from '@planetscale/database'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import * as schema from './schema'

// Set this value here to run each of the three tests
const testToRun: 'ps' | 'drizzle' | 'fix' = 'fix'

const connectionOptions = {
  logger: false,
  schema,
}
// create the connection
const connection = connect({
  host: 'localhost:3900',
  username: 'root',
  password: 'lalala',
  fetch: (url: string, init: any) => {
    (init as any).cache = undefined // Remove cache header
    const u = new URL(url)
    u.protocol = 'http'
    return fetch(u, init)
  },

})

const client = new Client({
  host: 'localhost:3900',
  username: 'root',
  password: 'lalala',
  fetch: (url: string, init: any) => {
    (init as any).cache = undefined // Remove cache header
    const u = new URL(url)
    u.protocol = 'http'
    return fetch(u, init)
  },
})

const conn = client.connection()
const drizz = drizzle(connection, connectionOptions)
// @ts-expect-error just testing issue fix
const fix = drizzle(client, connectionOptions)

if (testToRun === 'ps') {
  const psDriverQueries = [
    conn.execute('select * from table_1'),
    conn.execute('select * from table_2'),
    conn.execute('select * from table_3'),
    conn.execute('select * from table_4'),
    conn.execute('select * from table_5'),
    conn.execute('select * from table_6'),
    conn.execute('select * from table_7'),
    conn.execute('select * from table_8'),
    conn.execute('select * from table_9'),
    conn.execute('select * from table_10'),
    conn.execute('select * from table_11'),
    conn.execute('select * from table_12'),
    conn.execute('select * from table_13'),
    conn.execute('select * from table_14'),
    conn.execute('select * from table_15'),
  ]

  Promise.all(psDriverQueries).then(() => {
    console.log('psDriverQueries executed successfully - check logs for results')
  }).catch((error) => {
    console.error('Error executing queries:', error)
  })
}
else if (testToRun === 'drizzle') {
  await drizz.query.table1.findMany({})
  await drizz.query.table2.findMany({})
  await drizz.query.table3.findMany({})
  await drizz.query.table4.findMany({})
  await drizz.query.table5.findMany({})
  await drizz.query.table6.findMany({})
  await drizz.query.table7.findMany({})
  await drizz.query.table8.findMany({})
  await drizz.query.table9.findMany({})
  await drizz.query.table10.findMany({})
  await drizz.query.table11.findMany({})
  await drizz.query.table12.findMany({})
  await drizz.query.table13.findMany({})
  await drizz.query.table14.findMany({})
  await drizz.query.table15.findMany({})
  console.log('drizzle queries executed successfully')
}
else if (testToRun === 'fix') {
  await fix.query.table1.findMany({})
  await fix.query.table2.findMany({})
  await fix.query.table3.findMany({})
  await fix.query.table4.findMany({})
  await fix.query.table5.findMany({})
  await fix.query.table6.findMany({})
  await fix.query.table7.findMany({})
  await fix.query.table8.findMany({})
  await fix.query.table9.findMany({})
  await fix.query.table10.findMany({})
  await fix.query.table11.findMany({})
  await fix.query.table12.findMany({})
  await fix.query.table13.findMany({})
  await fix.query.table14.findMany({})
  await fix.query.table15.findMany({})
  console.log('fix queries executed successfully')
}
