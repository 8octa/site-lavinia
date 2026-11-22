export const SITE_NAME = 'na.digital'
export const SITE_URL = 'https://na-digital.netlify.app'

export function createPageMetadata({
  title,
  description,
  path = '/',
  robots,
  type = 'website',
  image = '/na-digital/og.png',
  locale = 'ro',
}) {
  const localizedPath =
    locale === 'en'
      ? path === '/'
        ? '/en'
        : `/en${path}`
      : path
  const languageAlternates = {
    'ro-RO': path,
    'en-GB': path === '/' ? '/en' : `/en${path}`,
    'x-default': path,
  }

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: languageAlternates,
    },
    ...(robots ? { robots } : {}),
    openGraph: {
      title,
      description,
      url: localizedPath,
      type,
      siteName: SITE_NAME,
      locale: locale === 'en' ? 'en_GB' : 'ro_RO',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
