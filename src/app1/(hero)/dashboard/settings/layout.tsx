

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <h2>Settings Layout</h2>
        {children}
      </div>
  );
}
