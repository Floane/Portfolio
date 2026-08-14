import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                © {new Date().getFullYear()} Floane Varathen
            </p>

            <nav aria-label="Liens légaux">
                <ul className={styles.links}>
                    <li>
                        <Link to="/mentions-legales" className={styles.link}>
                        Mentions légales
                        </Link>
                    </li>
                    <li>
                        <Link to="/politique-de-confidentialite" className={styles.link}>
                        Politique de confidentialité
                        </Link>
                    </li>
                </ul>
            </nav>

            <ul className={styles.social}>
                <li>
                    <a
                        href="https://github.com/Floane"
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                        <span className={styles.srOnly}> (nouvel onglet)</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/floane-varathen-794660275"
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                        <span className={styles.srOnly}> (nouvel onglet)</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;