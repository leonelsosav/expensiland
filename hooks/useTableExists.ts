import { getDBConnection, tableExists } from "@/shared/db-service";
import { useQuery } from "react-query";

export const useTableExists = (tableName: string) => {
    return useQuery(
      ['tableExists', tableName],
      async () => {
        const db = await getDBConnection();
        return await tableExists(db, tableName);
      }
    );
  };