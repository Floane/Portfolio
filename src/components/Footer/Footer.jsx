import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© 2026 Floane Varathen</p>

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
                <li
                
                    href="#"
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <a>
                        GitHub
                        <span className={styles.srOnly}> (nouvel onglet)</span>
                    </a>
                </li>
                <li
                
                    href="#"
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <a>
                        LinkedIn
                        <span className={styles.srOnly}> (nouvel onglet)</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;