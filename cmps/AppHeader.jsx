const { Link, NavLink, useLocation } = ReactRouterDOM

const KeepIcon = () => {
  return (
    <img
      src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-keep-2026/default.svg'
      alt='Google Keep (2026)'
      width='22'
      height='22'
    />
  )
}

const MailIcon = () => {
  return (
    <img
      src='https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gmail-2026/default.svg'
      alt='Gmail (2026)'
      width='22'
      height='22'
    />
  )
}

const APP_BRANDS = {
  '/mail': { Icon: MailIcon, label: 'GMAIL' },
  '/note': { Icon: KeepIcon, label: 'KEEP' },
}
const DEFAULT_BRAND = { Icon: KeepIcon, label: 'APPSUS' }

export function AppHeader() {
  const { pathname } = useLocation()
  const brandKey = Object.keys(APP_BRANDS).find((path) =>
    pathname.startsWith(path),
  )

  const { Icon, label } = APP_BRANDS[brandKey] || DEFAULT_BRAND
  console.log(pathname, 'patttha nameeeeeeeeeeee')
  return (
    <header className='app-header'>
      <Link to='/'>
        <div
          style={{ display: 'flex', height: 28, gap: 4, alignItems: 'center' }}
        >
          <Icon />
          <h4>{label}</h4>
        </div>
      </Link>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/mail'>Mail</NavLink>
        <NavLink to='/note'>Note</NavLink>
      </nav>
    </header>
  )
}
