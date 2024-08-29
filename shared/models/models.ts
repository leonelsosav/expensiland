
export type Account = {
  id: number;
  name: string;
  type: string;
  balance: number;
  currency: string;
};


export type Transaction = {
  id: number;
  account_id: number;
  date: string; 
  title: string;
  amount: number;
  labels: string[]; 
  type: string;
  status: string;
};


export type Budget = {
  id: number;
  account_id: number;
  category_id: number;
  amount: number;
  start_date: string; 
  end_date: string; 
};


export type Category = {
  id: number;
  name: string;
  parent_id: number | null; 
};


export type RecurringTransaction = {
  id: number;
  transaction_id: number;
  recurrence_rule: string; 
};


export type ExchangeRate = {
  id: number;
  currency_from: string;
  currency_to: string;
  rate: number;
  date: string; 
};