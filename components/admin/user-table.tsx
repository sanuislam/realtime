import prisma from "@/lib/prisma";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function UsersTable() {
  const data = await prisma.user.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
