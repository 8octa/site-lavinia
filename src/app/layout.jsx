import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
import SiteShell from './site-shell'

export const metadata = {
  title: 'na.digital · Studio de social media în București',
  description:
    'Studio de social media din București: administrare conturi, creare conținut video, TikTok, email marketing și audit.',
  openGraph: {
    title: 'na.digital · Studio de social media în București',
    description:
      'Studio de social media din București: administrare conturi, creare conținut video, TikTok, email marketing și audit.',
    type: 'website',
    locale: 'ro_RO',
    images: ['/na-digital/og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" data-theme="light" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>
          <SiteShell>{children}</SiteShell>
        </main>
        <Footer />
      </body>
    </html>
  )
}
