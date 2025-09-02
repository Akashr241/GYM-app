import DashboardStats from "@/components/admin/dashboard-stats";
import MemberManagement from "@/components/admin/member-management";
import NotificationCenter from "@/components/admin/notification-center";

export default function AdminDashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Admin Dashboard</h1>
      </div>
      <div className="flex flex-1 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <DashboardStats />
            <div className="md:col-span-2 lg:col-span-3">
              <MemberManagement />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <NotificationCenter />
            </div>
        </div>
      </div>
    </>
  );
}
