"use client";

import { Eye, MoreHorizontal } from "lucide-react";
import { bills, type Bill } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

function ReceiptDialog({ bill, children }: { bill: Bill; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Receipt - {bill.id}</DialogTitle>
          <DialogDescription>
            Details for your payment on {new Date(bill.date).toLocaleDateString()}.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="space-y-4 py-4">
            <div className="flex justify-between">
                <span className="text-muted-foreground">Member:</span>
                <span className="font-medium">{bill.memberName}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Date:</span>
                <span className="font-medium">{new Date(bill.date).toLocaleDateString()}</span>
            </div>
             <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant={bill.status === "Paid" ? "default" : "destructive"}>{bill.status}</Badge>
            </div>
             <Separator />
             <div className="flex justify-between text-lg">
                <span className="font-bold">Total Amount:</span>
                <span className="font-bold text-primary">${bill.amount.toFixed(2)}</span>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function BillHistory() {
  const memberBills = bills.filter((bill) => bill.memberId === 'usr_001');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bill History</CardTitle>
        <CardDescription>
          Here is a list of your past and outstanding payments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Receipt ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberBills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell className="font-medium">{bill.id}</TableCell>
                <TableCell>{new Date(bill.date).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">${bill.amount.toFixed(2)}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant={bill.status === "Paid" ? "outline" : "destructive"}>
                    {bill.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <ReceiptDialog bill={bill}>
                    <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View Receipt</span>
                    </Button>
                  </ReceiptDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
