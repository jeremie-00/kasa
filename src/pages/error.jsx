import Header from "@layouts/header";
import Footer from "@layouts/footer";

export default function PageError() {
    return <>
        <Header />
        <div className="wrapper error">
            <h1>404</h1>
            <p>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <h2>Retouner sur page d'accueil</h2>
        </div>
        <Footer />
    </>
}