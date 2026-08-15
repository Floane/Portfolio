import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <>
            <title>Page introuvable (404) | Floane Varathen</title>
            <meta name="robots" content="noindex, follow" />

            <section className={styles.notFound}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>Cette page n'existe pas… ou plus.</h1>
                <p className={styles.text}>
                    Ça arrive, même aux meilleurs sites. La page que vous cherchez a
                    peut-être changé d'adresse.
                </p>
                <Link to="/" className={styles.link}>
                    Retour à l'accueil
                </Link>
            </section>
        </>
    );
}

export default NotFound;