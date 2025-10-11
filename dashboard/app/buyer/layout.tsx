import DashboardLayout from '@/components/DashboardLayout';

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout userType="buyer">
      {children}
    </DashboardLayout>
  );
}