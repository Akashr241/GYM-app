import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Activity } from "lucide-react";
import { members, bills } from "@/lib/data";

export default function DashboardStats() {
    const totalMembers = members.length;
    const activeMembers = members.filter(m => m.status === 'Active').length;
    const totalRevenue = bills.filter(b => b.status === 'Paid').reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <>
      <Card className="lg:col-span-1 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalMembers}</div>
          <p className="text-xs text-muted-foreground">All registered members</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue (Paid)</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">From all completed payments</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeMembers}</div>
          <p className="text-xs text-muted-foreground">Members with active status</p>
        </CardContent>
      </Card>
    </>
  );
}
