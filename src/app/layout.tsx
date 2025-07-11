import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'AI Writing Assistant',
  description: 'Transform your writing with advanced AI technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body className={sora.className}>{children}</body>
    </html>
  );
}
