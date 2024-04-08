import Sidebar from "@/components/sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  params: { userId: string };
}

export default function layout({ children, params }: LayoutProps) {
  return (
    <div className="flex">
      <div className="w-[256px] h-[85vh]">
        <Sidebar id={params.userId} />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
