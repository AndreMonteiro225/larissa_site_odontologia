import './globals.css';
import { Inter } from 'next/font/google';

// Configuração da fonte Inter (Google Fonts)
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dra. Ana Silva | Odontologia Especializada',
  description: 'Clínica odontológica focada em estética, implantes e harmonização.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}