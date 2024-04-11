import Sidebar from "@/components/sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  params: { userId: string };
}

export default function layout({ children, params }: LayoutProps) {
  return (
    <div className="flex h-full">
      <div className="w-[256px] h-full">
        <Sidebar id={params.userId} />
      </div>
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
