import Sidebar from "@/components/sidebar/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-[256px] h-[85vh]">
        <Sidebar />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
