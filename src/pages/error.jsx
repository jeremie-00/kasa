import { useRouteError } from 'react-router-dom';

export default function PageError() {
    //renvoi la derniere erreur (url ou composent)
    const error = useRouteError()
    console.log(error)
    return <>
        <h1>Erreur 404</h1>
    </>
}