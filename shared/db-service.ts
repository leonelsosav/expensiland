import * as SQLite from "expo-sqlite";

let dbInstance: any = null;

export const getDBConnection = async () => {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    dbInstance = await SQLite.openDatabaseAsync("app-data.db");
    console.log("Database connection established");
    return dbInstance;
  } catch (error) {
    console.error("Failed to open database:", error);
    throw error;
  }
};

export const createTable = async (
  db: any,
  tableName: string,
  columns: string
) => {
  try {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;
    await db.execAsync(query);
  } catch (e) {
    console.log("Error during table creation:", e);
  }
};

// CREATE
export const insertItem = async (
  db: any,
  tableName: string,
  columns: string[],
  values: any[]
) => {
  try {
    const placeholders = columns.map(() => "?").join(",");
    const query = `INSERT INTO ${tableName} (${columns.join(
      ","
    )}) VALUES (${placeholders})`;
    console.log(`Executing insert query: ${query} with values`, values);
    await db.runAsync(query, values);
  } catch (e) {
    console.log("Error during insertion:", e);
    console.log("Failed values:", values);
  }
};

// READ
export const getItems = async (
  db: any,
  tableName: string,
  columns: string[] = ["*"],
  whereClause?: string
) => {
  try {
    const query = `SELECT ${columns.join(",")} FROM ${tableName} ${
      whereClause ? "WHERE " + whereClause : ""
    }`;
    console.log(`Executing select query: ${query}`);
    const result = await db.getAllAsync(query);
    return result;
  } catch (e) {
    console.log(e);
  }
};

// UPDATE
export const updateItem = async (
  db: any,
  tableName: string,
  updates: { [key: string]: any },
  whereClause: string
) => {
  const setClause = Object.keys(updates)
    .map((key) => `${key} = ?`)
    .join(",");
  const values = Object.values(updates);
  const query = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause}`;
  console.log(`Executing update query: ${query} with values ${values}`);
  await db.execAsync(query, values);
};

// DELETE
export const deleteItem = async (
  db: any,
  tableName: string,
  whereClause: string
) => {
  const query = `DELETE FROM ${tableName} WHERE ${whereClause}`;
  console.log(`Executing delete query: ${query}`);
  await db.execAsync(query);
};

export const dropTable = async (db: any, tableName: string) => {
  const query = `DROP TABLE IF EXISTS ${tableName}`;
  console.log(`Executing drop table query: ${query}`);
  await db.execAsync(query);
};

export const tableExists = async (
  db: any,
  tableName: string
): Promise<boolean> => {
  const query = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`;
  const result = await db.getAllAsync(query);
  return result.length > 0;
};
