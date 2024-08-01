import prisma from "../../lib/prisma";

export default async function Home({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  const rows = await prisma.users.findMany();
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.email}
        </div>
      ))}
    </div>
  );
}
