import { formatTitle } from '../main.jsx'
import { Helmet } from 'react-helmet'

export default function Error() {
    return (
        <>
            <Helmet>
                <title>{formatTitle('Error')}</title>
            </Helmet>
            <h1>The requested page could not be found.</h1>
        </>
    )
}