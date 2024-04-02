import { useRouteError } from 'react-router-dom';
import Header from "@layouts/header";
import Footer from "@layouts/footer";

export default function PageError() {
    //le hook useRouteError renvoi la derniere erreur (url ou composent)
    const error = useRouteError()

    return <>
        <Header />
        <h1>Erreur 404 page de test</h1>
        <p>
            {error?.error?.toString() ?? error?.toString()}
        </p>
        <Footer />
    </>
}