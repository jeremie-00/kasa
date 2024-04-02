import { useRouteError } from 'react-router-dom';

export default function PageError() {
    //le hook useRouteError renvoi la derniere erreur (url ou composent)
    const error = useRouteError()
    return <>
        <h1>Erreur 404</h1>
        <p>
            {error?.error?.toString() ?? error?.toString()}
        </p>
    </>
}