import Link from 'next/link';

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="font-bold text-primary text-lg hover:text-primary/80 transition">
            ← Back to Home
          </Link>
          <h1 className="text-xl font-bold text-text">Components Preview</h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-8 px-6">
        {children}
      </main>
    </div>
  );
}
