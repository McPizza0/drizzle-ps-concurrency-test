import { int, mysqlEnum, mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core'

export const table1 = mysqlTable('table_1', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table2 = mysqlTable('table_2', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table3 = mysqlTable('table_3', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table4 = mysqlTable('table_4', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table5 = mysqlTable('table_5', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table6 = mysqlTable('table_6', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table7 = mysqlTable('table_7', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table8 = mysqlTable('table_8', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table9 = mysqlTable('table_9', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table10 = mysqlTable('table_10', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table11 = mysqlTable('table_11', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table12 = mysqlTable('table_12', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table13 = mysqlTable('table_13', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table14 = mysqlTable('table_14', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
export const table15 = mysqlTable('table_15', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, table => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}))
