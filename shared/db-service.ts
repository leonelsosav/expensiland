import * as SQLite from 'expo-sqlite';

export const getDBConnection = async () => {
  return await SQLite.openDatabaseAsync('app-data.db');
};

export const createTable = async (db: any, tableName: string, columns: string) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;
  console.log('Executing table creation query:', query);
  await db.execAsync(query);
};

// CREATE
export const insertItem = async (db: any, tableName: string, columns: string[], values: any[]) => {
  const placeholders = columns.map(() => '?').join(',');
  const query = `INSERT INTO ${tableName} (${columns.join(',')}) VALUES (${placeholders})`;
  console.log(`Executing insert query: ${query} with values ${values}`);
  await db.execAsync(query, values);
};

// READ
export const getItems = async (db: any, tableName: string, columns: string[] = ['*'], whereClause?: string) => {
  const query = `SELECT ${columns.join(',')} FROM ${tableName} ${whereClause ? 'WHERE ' + whereClause : ''}`;
  console.log(`Executing select query: ${query}`);
  const result = await db.getAllAsync(query);
  return result;
};

// UPDATE
export const updateItem = async (db: any, tableName: string, updates: { [key: string]: any }, whereClause: string) => {
  const setClause = Object.keys(updates).map(key => `${key} = ?`).join(',');
  const values = Object.values(updates);
  const query = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause}`;
  console.log(`Executing update query: ${query} with values ${values}`);
  await db.execAsync(query, values);
};

// DELETE
export const deleteItem = async (db: any, tableName: string, whereClause: string) => {
  const query = `DELETE FROM ${tableName} WHERE ${whereClause}`;
  console.log(`Executing delete query: ${query}`);
  await db.execAsync(query);
};

export const dropTable = async (db: any, tableName: string) => {
  const query = `DROP TABLE IF EXISTS ${tableName}`;
  console.log(`Executing drop table query: ${query}`);
  await db.execAsync(query);
};

export const tableExists = async (db: any, tableName: string): Promise<boolean> => {
  const query = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`;
  const result = await db.getAllAsync(query);
  return result.length > 0;
};