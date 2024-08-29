import { getDBConnection, updateItem } from "@/shared/db-service";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateItem = (tableName: string) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async ({ updates, whereClause }: { updates: { [key: string]: any }; whereClause: string }) => {
        const db = await getDBConnection();
        await updateItem(db, tableName, updates, whereClause);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([tableName]);
        },
      }
    );
  };