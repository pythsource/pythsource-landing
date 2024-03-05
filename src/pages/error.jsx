import { changeTitle } from '../main.jsx'

export default function Error() {
    changeTitle('Error')

    return (
        <>
            <h1>The requested page could not be found.</h1>
        </>
    )
}