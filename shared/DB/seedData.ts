import { insertItem } from "../db-service";

// Sample data for the `accounts` table
const accountsData = [
  {
    name: "Checking Account",
    type: "Checking",
    balance: 1200.5,
    currency: "USD",
  },
  {
    name: "Savings Account",
    type: "Savings",
    balance: 8500.0,
    currency: "USD",
  },
  { name: "Credit Card", type: "Credit", balance: -320.75, currency: "USD" },
];

// Sample data for the `categories` table
const categoriesData = [
  { name: "Groceries", parent_id: null },
  { name: "Rent", parent_id: null },
  { name: "Utilities", parent_id: null },
  { name: "Internet", parent_id: 3 },
  { name: "Electricity", parent_id: 3 },
];

// Sample data for the `transactions` table
const transactionsData = [
  {
    account_id: 1,
    date: "2024-08-01",
    title: "Grocery Store",
    amount: -120.45,
    labels: ["Groceries"].join(","),
    type: "Expense",
    status: "Completed",
  },
  {
    account_id: 1,
    date: "2024-08-02",
    title: "Salary",
    amount: 2000.0,
    labels: ["Income"].join(","),
    type: "Income",
    status: "Completed",
  },
  {
    account_id: 2,
    date: "2024-08-03",
    title: "Rent Payment",
    amount: -800.0,
    labels: ["Rent"].join(","),
    type: "Expense",
    status: "Completed",
  },
  {
    account_id: 3,
    date: "2024-08-04",
    title: "Credit Card Payment",
    amount: 320.75,
    labels: ["Payment"].join(","),
    type: "Expense",
    status: "Completed",
  },
];

// Sample data for the `budgets` table
const budgetsData = [
  {
    account_id: 1,
    category_id: 1,
    amount: 500.0,
    start_date: "2024-08-01",
    end_date: "2024-08-31",
  },
  {
    account_id: 2,
    category_id: 2,
    amount: 1000.0,
    start_date: "2024-08-01",
    end_date: "2024-08-31",
  },
];

// Sample data for the `recurring_transactions` table
const recurringTransactionsData = [
  { transaction_id: 1, recurrence_rule: "FREQ=WEEKLY;BYDAY=MO" },
  { transaction_id: 3, recurrence_rule: "FREQ=MONTHLY;BYMONTHDAY=1" },
];

// Sample data for the `exchange_rates` table
const exchangeRatesData = [
  { currency_from: "USD", currency_to: "EUR", rate: 0.85, date: "2024-08-01" },
  { currency_from: "USD", currency_to: "GBP", rate: 0.75, date: "2024-08-01" },
];

// Function to populate all tables with sample data
export const populateTables = async (db: any) => {
  await Promise.all([
    // Populating accounts table
    ...accountsData.map((account) =>
      insertItem(
        db,
        "accounts",
        ["name", "type", "balance", "currency"],
        Object.values(account)
      )
    ),

    // Populating categories table
    ...categoriesData.map((category) =>
      insertItem(
        db,
        "categories",
        ["name", "parent_id"],
        Object.values(category)
      )
    ),

    // Populating transactions table
    ...transactionsData.map((transaction) =>
      insertItem(
        db,
        "transactions",
        ["account_id", "date", "title", "amount", "labels", "type", "status"],
        Object.values(transaction)
      )
    ),

    // Populating budgets table
    ...budgetsData.map((budget) =>
      insertItem(
        db,
        "budgets",
        ["account_id", "category_id", "amount", "start_date", "end_date"],
        Object.values(budget)
      )
    ),

    // Populating recurring_transactions table
    ...recurringTransactionsData.map((recurringTransaction) =>
      insertItem(
        db,
        "recurring_transactions",
        ["transaction_id", "recurrence_rule"],
        Object.values(recurringTransaction)
      )
    ),

    // Populating exchange_rates table
    ...exchangeRatesData.map((exchangeRate) =>
      insertItem(
        db,
        "exchange_rates",
        ["currency_from", "currency_to", "rate", "date"],
        Object.values(exchangeRate)
      )
    ),
  ]);

  console.log("Tables populated with sample data.");
};
