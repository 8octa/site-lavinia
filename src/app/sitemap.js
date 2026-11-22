import { SITE_URL } from './_seo'

const routes = [
  ['', 'weekly', 1],
  ['/pentru-cine', 'monthly', 0.8],
  ['/ce-facem', 'monthly', 0.9],
  ['/ce-am-facut', 'monthly', 0.8],
  ['/artisti', 'monthly', 0.7],
  ['/cine-suntem', 'monthly', 0.7],
  ['/gratis', 'monthly', 0.6],
  ['/intrebari', 'monthly', 0.7],
  ['/contact', 'monthly', 0.8],
  ['/lunar', 'monthly', 0.9],
  ['/content-creation', 'monthly', 0.9],
  ['/audit', 'monthly', 0.9],
  ['/tiktok-start', 'monthly', 0.8],
  ['/email-marketing', 'monthly', 0.8],
  ['/facut-de-mana', 'monthly', 0.8],
]

export default function sitemap() {
  return routes.flatMap(([path, changeFrequency, priority]) => {
    const englishPath = path === "" ? "/en" : `/en${path}`
    const languageAlternates = {
      "ro-RO": `${SITE_URL}${path || "/"}`,
      "en-GB": `${SITE_URL}${englishPath}`,
      "x-default": `${SITE_URL}${path || "/"}`,
    }

    return [
      {
        url: `${SITE_URL}${path || "/"}`,
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates },
      },
      {
        url: `${SITE_URL}${englishPath}`,
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates },
      },
    ]
  })
}
