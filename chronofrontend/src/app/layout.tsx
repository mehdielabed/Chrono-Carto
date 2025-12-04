import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '../components/ui/toast';
import F12Detector from '../components/F12Detector';
import GlobalConsoleScript from '../components/GlobalConsoleScript';
import ResponsiveWrapper from '../components/ResponsiveWrapper';
import '../lib/global-console-protection';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Chrono-Carto',
  description: 'Plateforme éducative dédiée aux élèves préparant le bac français en Histoire-Géographie. Accédez à des cours, quiz interactifs, et ressources pour réussir votre bac.',
  keywords: 'histoire, géographie, bac, éducation, cours, quiz, EMC, grand oral, parcoursup',
  authors: [{ name: 'Chrono-Carto' }],
  icons: {
    icon: '/images/chrono_carto_logo.png',
    shortcut: '/images/chrono_carto_logo.png',
    apple: '/images/chrono_carto_logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0369a1' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Chrono-Carto',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GlobalConsoleScript />
      </head>
      <body className="font-sans antialiased">
        <ResponsiveWrapper>
          <ToastProvider>
            <div id="root">
              {children}
            </div>
            <div id="modal-root"></div>
          </ToastProvider>
          <F12Detector />
        </ResponsiveWrapper>
      </body>
    </html>
  );
}


