import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "管理后台 | Khalil",
  description: "网站管理后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-900">
      {children}
    </div>
  );
}

