'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { Check, Palette } from 'lucide-react'

const themes = [
  { name: 'light', label: 'Light' },
  { name: 'dark', label: 'Dark' },
  { name: 'na', label: 'na.digital' },
]

const themeNames = themes.map((item) => item.name)
const themeListeners = new Set()
const serverThemeSnapshot = { theme: 'light', error: '' }

function readSavedTheme() {
  if (typeof window === 'undefined') return serverThemeSnapshot

  try {
    const savedTheme = window.localStorage.getItem('na-theme')
    return {
      theme: themeNames.includes(savedTheme) ? savedTheme : 'light',
      error: '',
    }
  } catch {
    return { theme: 'light', error: 'Tema va reveni la Light la următoarea vizită.' }
  }
}

let themeSnapshot = readSavedTheme()

function getThemeSnapshot() {
  return themeSnapshot
}

function subscribeToTheme(listener) {
  themeListeners.add(listener)
  window.addEventListener('storage', handleThemeStorage)

  return () => {
    themeListeners.delete(listener)
    window.removeEventListener('storage', handleThemeStorage)
  }
}

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener())
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
}

function handleThemeStorage(event) {
  if (event.key !== 'na-theme') return

  const savedTheme = themeNames.includes(event.newValue) ? event.newValue : 'light'
  themeSnapshot = { theme: savedTheme, error: '' }
  applyTheme(savedTheme)
  notifyThemeListeners()
}

function changeTheme(nextTheme) {
  applyTheme(nextTheme)

  let error = ''
  try {
    window.localStorage.setItem('na-theme', nextTheme)
  } catch {
    error = 'Tema nu a putut fi salvată pentru următoarea vizită.'
  }

  themeSnapshot = { theme: nextTheme, error }
  notifyThemeListeners()
}

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, error: themeError } = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => serverThemeSnapshot,
  )
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const services = [
    '/lunar',
    '/content-creation',
    '/audit',
    '/tiktok-start',
    '/email-marketing',
    '/facut-de-mana',
  ]
  const currentPage = services.includes(pathname) ? '/ce-facem' : pathname

  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <Link href="/" className="logo" onClick={closeMenu}>
          na.digital
        </Link>

        <button
          type="button"
          className="menu-btn btn btn-outline btn-sm hidden max-[860px]:inline-flex"
          aria-expanded={menuOpen}
          aria-controls="meniu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Închide' : 'Meniu'}
        </button>

        <nav
          id="meniu"
          className={`topbar-menu${menuOpen ? ' open' : ''}`}
          aria-label="Navigare principală"
        >
          <Link href="/pentru-cine" aria-current={currentPage === '/pentru-cine' ? 'page' : undefined} onClick={closeMenu}>
            Pentru cine
          </Link>
          <Link href="/ce-facem" aria-current={currentPage === '/ce-facem' ? 'page' : undefined} onClick={closeMenu}>
            Ce facem
          </Link>
          <Link href="/ce-am-facut" aria-current={currentPage === '/ce-am-facut' ? 'page' : undefined} onClick={closeMenu}>
            Ce-am făcut
          </Link>
          <Link href="/artisti" aria-current={currentPage === '/artisti' ? 'page' : undefined} onClick={closeMenu}>
            Artiști
          </Link>
          <Link href="/cine-suntem" aria-current={currentPage === '/cine-suntem' ? 'page' : undefined} onClick={closeMenu}>
            Cine suntem
          </Link>
          <div className="dropdown dropdown-end theme-switcher">
            <button
              type="button"
              className="btn btn-ghost btn-square btn-sm theme-switcher-trigger"
              aria-label={`Temă: ${themes.find((item) => item.name === theme)?.label}`}
              title={`Temă: ${themes.find((item) => item.name === theme)?.label}`}
            >
              <Palette aria-hidden="true" />
            </button>
            <ul tabIndex={0} className="menu dropdown-content theme-switcher-menu" aria-label="Alege tema">
              {themes.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === item.name}
                    className={theme === item.name ? 'active' : ''}
                    onClick={() => changeTheme(item.name)}
                  >
                    <span className={`theme-swatch theme-swatch-${item.name}`} aria-hidden="true" />
                    <span>{item.label}</span>
                    {theme === item.name && <Check className="theme-check" aria-hidden="true" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/contact"
            className="topbar-cta"
            onClick={closeMenu}
          >
            Hai să vorbim
          </Link>
        </nav>
      </div>
      {themeError && <span className="sr-only" role="status">{themeError}</span>}
    </header>
  )
}
