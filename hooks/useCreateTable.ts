import { useQuery } from "react-query";
import { createTable } from "@/shared/db-service";

export const useCreateTable = ({
  db,
  tableName,
  columns,
}: {
  db: any;
  tableName: string;
  columns: string;
}) => {
  return useQuery({
    queryFn: async () => {
      try {
        await createTable(db, tableName, columns);
      } catch (error) {
        console.error(`Error creating table ${tableName}:`, error);
        throw error; // Ensure errors are propagated to be handled by React Query
      }
    },
    queryKey: ["createTable", tableName],
  });
};
