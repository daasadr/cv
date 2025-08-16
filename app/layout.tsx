import './globals.css';
import { LanguageWrapper } from '@/components/LanguageWrapper';
import {
  BodyWrapper,
  bodyFontClass,
  fontVariables,
  HeadContent,
  metadata,
} from '@/components/layout';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
      <LanguageProvider>
        <LanguageWrapper>
          <BodyWrapper fontClass={bodyFontClass}>{children}</BodyWrapper>
        </LanguageWrapper>
      </LanguageProvider>
    </html>
  );
}
