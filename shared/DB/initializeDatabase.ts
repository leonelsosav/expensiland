import { createTable, getDBConnection, getItems } from "../db-service";

// Define columns for each table
const accountsTableColumns = `
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  balance NUMERIC NOT NULL,
  currency TEXT NOT NULL
`;

const transactionsTableColumns = `
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  title TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  labels TEXT,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  FOREIGN KEY(account_id) REFERENCES accounts(id)
`;

const budgetsTableColumns = `
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  amount NUMERIC NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  FOREIGN KEY(account_id) REFERENCES accounts(id),
  FOREIGN KEY(category_id) REFERENCES categories(id)
`;

const categoriesTableColumns = `
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  parent_id INTEGER,
  FOREIGN KEY(parent_id) REFERENCES categories(id)
`;

const recurringTransactionsTableColumns = `
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  transaction_id INTEGER NOT NULL,
  recurrence_rule TEXT NOT NULL,
  FOREIGN KEY(transaction_id) REFERENCES transactions(id)
`;

const exchangeRatesTableColumns = `
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  currency_from TEXT NOT NULL,
  currency_to TEXT NOT NULL,
  rate NUMERIC NOT NULL,
  date DATE NOT NULL
`;

// Initialize the database by creating all tables
export const initializeDatabase = async () => {
  try {
    const db = await getDBConnection();
    await createTable(db, "accounts", accountsTableColumns);
    await createTable(db, "transactions", transactionsTableColumns);
    await createTable(db, "budgets", budgetsTableColumns);
    await createTable(db, "categories", categoriesTableColumns);
    await createTable(
      db,
      "recurring_transactions",
      recurringTransactionsTableColumns
    );
    await createTable(db, "exchange_rates", exchangeRatesTableColumns);
    return db;
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

// Function to log all values from each table
export const logAllTableData = async (db: any) => {
  try {
    const accounts = await getItems(db, "accounts");
    console.log("Accounts:", accounts);

    const transactions = await getItems(db, "transactions");
    console.log("Transactions:", transactions);

    const budgets = await getItems(db, "budgets");
    console.log("Budgets:", budgets);

    const categories = await getItems(db, "categories");
    console.log("Categories:", categories);

    const recurringTransactions = await getItems(db, "recurring_transactions");
    console.log("Recurring Transactions:", recurringTransactions);

    const exchangeRates = await getItems(db, "exchange_rates");
    console.log("Exchange Rates:", exchangeRates);
  } catch (error) {
    console.error("Error logging table data:", error);
  }
};
