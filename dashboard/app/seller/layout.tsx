import DashboardLayout from '@/components/DashboardLayout';

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout userType="seller">
      {children}
    </DashboardLayout>
  );
}