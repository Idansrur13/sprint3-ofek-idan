const { useEffect, useState } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'
import { eventBus, showSuccessMsg } from '../../../services/event-bus.service.js'

export function mailEdit() {
    const [ mail, setmail ] = useState(mailService.getEmptymail())
    const [ msg, setMsg ] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.id) {
            mailService.get(params.id)
                .then(setmail)
        }
    }, [])

    function handleChange({ target }) {
        const { type, name, value } = target
        setmail(prev => ({...prev, [name]: type === 'text' ? value : +value}))
    }

    function onSavemail(ev) {
        ev.preventDefault()

        mailService.save(mail)
            .then(mail => {
                showSuccessMsg(`mail ${mail.id} saved`)
                navigate('/mail')
            })
    }

    return <form className="mail-edit" onSubmit={onSavemail}>
        <label htmlFor="vendor">vendor:</label>
        <input 
            type="text" 
            placeholder="vendor"
            id="subject"
            name="vendor"
            value={mail.subject}
            onChange={handleChange}/>
{/*             
        <label htmlFor="maxSpeed">max. speed:</label>
        <input 
            type="number" 
            placeholder="maxSpeed"
            id="maxSpeed"
            name="maxSpeed"
            value={mail.maxSpeed}
            onChange={handleChange}/> */}

        <div className="mail-actions">
            <button>Save</button>
            <Link to="/mail"><button type="button">Cancel</button></Link>
        </div>
    </form>
}
