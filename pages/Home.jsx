import { BookIcon, HomeIcon, KeepIcon, MailIcon } from '../apps/icons/icons.jsx'
import { ThanksYou } from '../cmps/ThanksYou.jsx'
import { showSuccessMsg } from '../services/event-bus.service.js'
const { useNavigate } = ReactRouterDOM

export function Home() {
  const navigate = useNavigate()

  return (
    <section className='container home'>
      <h1>Welcome home</h1>
      <button onClick={() => showSuccessMsg('Yep, that works')}>
        Show Msg
      </button>
      <div className='nav-home'>
        <div className='nav-home-btn' onClick={() => navigate('/')}>
          <HomeIcon size={160} />
          Home
        </div>
        <div className='nav-home-btn' onClick={() => navigate('/Books')}>
          <BookIcon size={160} />
          Books
        </div>
        <div className='nav-home-btn' onClick={() => navigate('/mail')}>
          <MailIcon size={160} /> Mail
        </div>
        <div className='nav-home-btn' onClick={() => navigate('/note')}>
          <KeepIcon size={160} />
          Note
        </div>
      </div>
      <ThanksYou />
    </section>
  )
}
