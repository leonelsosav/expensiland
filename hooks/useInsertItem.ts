import { getDBConnection, insertItem } from "@/shared/db-service";
import { useMutation, useQueryClient } from "react-query";

export const useInsertItem = (tableName: string) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async ({ columns, values }: { columns: string[]; values: any[] }) => {
        const db = await getDBConnection();
        await insertItem(db, tableName, columns, values);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([tableName]);
        },
      }
    );
  };