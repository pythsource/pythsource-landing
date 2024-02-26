import { changeTitle } from '../main.jsx'

export default function Error() {
    changeTitle('Error')

    return (
        <>
            <h1>The requested page has not been found.</h1>
        </>
    )
}