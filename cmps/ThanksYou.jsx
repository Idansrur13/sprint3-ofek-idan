import { LinkDinIcon } from '../apps/icons/icons'

const us = [
  {
    name: 'Idan Srur',
    title: 'React Native & Full-Stack Developer',
    num: '052-4633778',
    linkDin: 'https://www.linkedin.com/in/idan-srur',
    inst: '',
    img: '/apps/imgs/עידן-1.jpg',
  },
  {
    name: 'Afek Meshulam',
    title: '',
    num: '',
    linkDin: '',
    inst: '',
    img: '',
  },
]

export function ThanksYou() {
  return (
    <section className='thanks-you'>
      <h2>Thanks You</h2>
      <div className='thanks-list'>
        {us.map((u) => {
          return (
            <div className='thanks-card' key={u.name}>
              <img className='thanks-avatar' src={u.img} alt={u.name} />
              <div style={{ gap: 4, display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    fontWeight: 200,
                    fontStyle: 'italic',
                    fontSize: '1.4rem',
                  }}
                >
                  {u.name}
                </p>
                <p
                  style={{
                    color: '#6b5b45',
                    fontWeight: 200,
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                  }}
                >
                  {' '}
                  {u.title}
                </p>
                <div style={{ display: 'flex', gap: 6 }}>
                  <LinkDinIcon size={18} />
                  <a href={u.linkDin}>{u.linkDin}</a>
                </div>
                <p>{u.inst}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
