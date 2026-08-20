const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
import { BookIndex } from './apps/misBooks/cmps/BookIndex.jsx'
import { BookEdit } from './apps/misBooks/cmps/BookEdit.jsx'
import { BookDetails } from './apps/misBooks/cmps/BookDetails.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { MailIndex } from './apps/mail/pages/MailIndex.jsx'
import { MailDetails } from './apps/mail/pages/MailDetails.jsx'
import { MailEdit } from './apps/mail/pages/MailEdit.jsx'
import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'

export function RootCmp() {
  return (
    <Router>
      <section className='root-cmp'>
        <AppHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/mail' element={<MailIndex />} />
          <Route path='/mail/edit' element={<MailEdit />} />
          <Route path='/mail/edit/:id' element={<MailEdit />} />
          <Route path='/mail/:id' element={<MailDetails />} />
          <Route path='/note' element={<NoteIndex />} />

          <Route path='/Books' element={<BookIndex />} />
          <Route path='/Books/Edit/:id' element={<BookEdit />} />
          <Route path='/Books/:id' element={<BookDetails />} />
        </Routes>
        <UserMsg />
      </section>
    </Router>
  )
}
