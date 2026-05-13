import './globals.css';
import { Open_Sans } from 'next/font/google';

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
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${openSans.className} bg-[#FCFCFC]`}>
        {children}
      </body>
    </html>
  );
}