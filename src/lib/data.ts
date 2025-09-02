export type Member = {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  tier: 'Basic' | 'Premium' | 'VIP';
  status: 'Active' | 'Inactive';
};

export type Bill = {
  id: string;
  memberId: string;
  memberName: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Due';
};

export const members: Member[] = [
  { id: 'usr_001', name: 'Alice Johnson', email: 'alice@example.com', joinDate: '2023-01-15', tier: 'Premium', status: 'Active' },
  { id: 'usr_002', name: 'Bob Williams', email: 'bob@example.com', joinDate: '2023-02-20', tier: 'Basic', status: 'Active' },
  { id: 'usr_003', name: 'Charlie Brown', email: 'charlie@example.com', joinDate: '2023-03-10', tier: 'VIP', status: 'Active' },
  { id: 'usr_004', name: 'Diana Prince', email: 'diana@example.com', joinDate: '2022-11-05', tier: 'Premium', status: 'Inactive' },
  { id: 'usr_005', name: 'Ethan Hunt', email: 'ethan@example.com', joinDate: '2023-05-01', tier: 'Basic', status: 'Active' },
  { id: 'usr_006', name: 'Fiona Glenanne', email: 'fiona@example.com', joinDate: '2023-06-12', tier: 'Premium', status: 'Active' },
  { id: 'usr_007', name: 'George Costanza', email: 'george@example.com', joinDate: '2023-07-21', tier: 'Basic', status: 'Inactive' },
];

export const bills: Bill[] = [
  { id: 'bill_001', memberId: 'usr_001', memberName: 'Alice Johnson', date: '2024-07-01', amount: 75, status: 'Paid' },
  { id: 'bill_002', memberId: 'usr_002', memberName: 'Bob Williams', date: '2024-07-01', amount: 40, status: 'Paid' },
  { id: 'bill_003', memberId: 'usr_003', memberName: 'Charlie Brown', date: '2024-07-01', amount: 120, status: 'Paid' },
  { id: 'bill_004', memberId: 'usr_001', memberName: 'Alice Johnson', date: '2024-06-01', amount: 75, status: 'Paid' },
  { id: 'bill_005', memberId: 'usr_002', memberName: 'Bob Williams', date: '2024-08-01', amount: 40, status: 'Due' },
  { id: 'bill_006', memberId: 'usr_005', memberName: 'Ethan Hunt', date: '2024-07-05', amount: 40, status: 'Paid' },
  { id: 'bill_007', memberId: 'usr_006', memberName: 'Fiona Glenanne', date: '2024-07-12', amount: 75, status: 'Paid' },
  { id: 'bill_008', memberId: 'usr_003', memberName: 'Charlie Brown', date: '2024-08-01', amount: 120, status: 'Due' },
];
