import { deleteItem, getDBConnection } from "@/shared/db-service";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteItem = (tableName: string) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async (whereClause: string) => {
        const db = await getDBConnection();
        await deleteItem(db, tableName, whereClause);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([tableName]);
        },
      }
    );
  };