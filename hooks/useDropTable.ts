import { dropTable, getDBConnection } from "@/shared/db-service";
import { useMutation, useQueryClient } from "react-query";

export const useDropTable = () => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async (tableName: string) => {
        const db = await getDBConnection();
        await dropTable(db, tableName);
      },
      {
        onSuccess: (data, tableName) => {
          queryClient.invalidateQueries([tableName]);
        },
      }
    );
  };