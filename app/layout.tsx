export const metadata = {
  title: 'SANAD ERP SaaS',
  description: 'Enterprise AI ERP SaaS Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
