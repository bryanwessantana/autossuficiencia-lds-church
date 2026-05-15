import './globals.css';
import { Open_Sans } from 'next/font/google';
import StyledJsxRegistry from '../lib/registry';

const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Autossuficiência - Estaca Portão',
  description: 'Catálogo digital de expositores da Estaca Portão',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${openSans.className} antialiased`}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}