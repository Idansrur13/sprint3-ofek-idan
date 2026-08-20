const {NavLink} = ReactRouterDOM

export  function AppHeader({ page = 'home', onSetPage }) {

    return <header className="app-header full main-layout">
        <section className="header-container">
            <h1>miss books</h1>

                <NavLink to="/" className={(page === 'Home') ? 'active' : ''}
                    onClick={(ev) => onSetPage('Home')}>
                    Home
                </NavLink>
                <span> | </span>
                <NavLink to="/About" className={(page === 'About') ? 'active' : ''}
                    onClick={(ev) => onSetPage('About')}>
                    About
                </NavLink>
                                <span> | </span>

                <NavLink to="/Books" className={(page === 'BookIndex') ? 'active' : ''}
                    onClick={(ev) => onSetPage('BookIndex')}>
                    BookIndex
                </NavLink>

        </section>
    </header>
}
