import Header from "@/components/header/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <div className="h-[15%]">
        <Header />
      </div>
      <div className="h-[85%]">
        {children}
      </div>
    </div>
  );
}
