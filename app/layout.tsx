import type { ReactNode } from 'react';

// Since we have a `[locale]` directory, this will not be used
// but Next.js requires a root layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
