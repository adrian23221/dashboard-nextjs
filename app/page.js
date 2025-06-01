import { Dashboard } from "@/components/Dashboard/Dashboard";
import MobileSidebar from "@/components/Sidebar/MobileSidebar";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="p-4">
      <MobileSidebar /> {/* visible only on mobile */}
      <div className="hidden md:grid md:grid-cols-[220px_1fr] gap-4">
        <Sidebar />
        <Dashboard />
      </div>
      <div className="block md:hidden">
        <Dashboard /> {/* visible only on mobile */}
      </div>
    </main>
  );
}
