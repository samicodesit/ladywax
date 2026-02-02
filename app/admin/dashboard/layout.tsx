"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "🏠" },
  { href: "/admin/dashboard/business", label: "Business Info", icon: "🏢" },
  { href: "/admin/dashboard/locations", label: "Locations", icon: "📍" },
  { href: "/admin/dashboard/hero", label: "Hero Section", icon: "🖼️" },
  { href: "/admin/dashboard/features", label: "Features", icon: "✨" },
  { href: "/admin/dashboard/highlights", label: "Highlights", icon: "🌟" },
  { href: "/admin/dashboard/waxing", label: "Waxing Page", icon: "📄" },
  { href: "/admin/dashboard/careers", label: "Careers Page", icon: "💼" },
  { href: "/admin/dashboard/contact", label: "Contact Page", icon: "📧" },
  { href: "/admin/dashboard/navigation", label: "Navigation", icon: "🧭" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg transition-all duration-300 flex flex-col h-screen sticky top-0 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 border-b flex-shrink-0">
          <Link
            href="/admin/dashboard"
            className={`font-bold text-xl text-blue-600 ${
              !isSidebarOpen && "text-center block"
            }`}
          >
            {isSidebarOpen ? "LadyWax Admin" : "LW"}
          </Link>
        </div>

        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {isSidebarOpen && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t bg-white flex-shrink-0">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <span>{isSidebarOpen ? "←" : "→"}</span>
            {isSidebarOpen && <span>Collapse</span>}
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <span>🚪</span>
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
