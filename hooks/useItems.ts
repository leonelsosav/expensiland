import { getDBConnection, getItems } from '@/shared/db-service';
import { useQuery } from 'react-query';

export const useItems = (tableName: string, columns: string[] = ['*'], whereClause?: string) => {
  return useQuery(
    [tableName, whereClause],
    async () => {
      const db = await getDBConnection();
      return await getItems(db, tableName, columns, whereClause);
    },
    {
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    }
  );
};