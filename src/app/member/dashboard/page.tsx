import BillHistory from "@/components/member/bill-history";

export default function MemberDashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Welcome, Alice!</h1>
      </div>
      <div className="flex flex-1 rounded-lg" >
        <div className="w-full">
            <BillHistory />
        </div>
      </div>
    </>
  );
}
