const { Link, NavLink, useLocation } = ReactRouterDOM
const { useState } = React
import {
  Menu,
  MailIcon,
  KeepIcon,
  BookIcon,
  HomeIcon,
} from '../apps/icons/icons.jsx'

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
  const [openNavBar, setOpenNavBar] = useState(false)
  const { Icon, label } = APP_BRANDS[brandKey] || DEFAULT_BRAND
  return (
    <header className='app-header-menu '>
      <div onClick={() => setOpenNavBar((v) => !v)}>
        <Menu />
      </div>
      <Link to='/'>
        <div
          style={{ display: 'flex', height: 28, gap: 4, alignItems: 'center' }}
        >
          <Icon />
          <h4>{label}</h4>
        </div>
      </Link>
      {openNavBar && (
        <div>
          <NavBar label={label} />
        </div>
      )}
    </header>
  )
}

function NavBar({ label }) {
  return (
    <nav className='nav-div'>
      <NavLink to='/'>
        <HomeIcon />
        {/* Home */}
      </NavLink>

      <NavLink to='/Books'>
        {' '}
        <BookIcon />
        {/* Books */}
      </NavLink>
      <NavLink to='/mail'>
        <MailIcon />
        {/* Mail */}
      </NavLink>
      <NavLink to='/note'>
        {' '}
        <KeepIcon />
        {/* Note */}
      </NavLink>
    </nav>
  )
}
