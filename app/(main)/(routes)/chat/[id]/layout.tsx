import Sidebar from "@/components/sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export default function layout(
  {children, params}: LayoutProps
) {
  return (
    <div className="flex">
      <div className="w-[256px] h-[85vh]">
        <Sidebar id={params.id} />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
