import './globals.css';
import {
  BodyWrapper,
  bodyFontClass,
  fontVariables,
  HeadContent,
  metadata,
} from '@/components/layout';

// Re-export metadata for Next.js
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={fontVariables}>
      <head>
        <HeadContent />
      </head>
      <BodyWrapper fontClass={bodyFontClass}>{children}</BodyWrapper>
    </html>
  );
}
