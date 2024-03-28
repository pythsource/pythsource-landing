import { changeTitle, parseLocale } from '../main.jsx'
import { useParams } from 'react-router'

export default function Services() {
    const params = useParams()
    const localeInfo = parseLocale(params['lang'])

    changeTitle(localeInfo.isRussian ? 'Услуги' : 'Services')

    return (
        <>
            <h1>300$ per service definitely 100%</h1>
        </>
    )
}