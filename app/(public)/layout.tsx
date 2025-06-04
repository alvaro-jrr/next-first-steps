import { NavBar } from "@/components/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      <main className="flex flex-col p-24 items-center">
        <span className="font-medium mb-2">Section</span>

        {children}
      </main>
    </>
  );
}
