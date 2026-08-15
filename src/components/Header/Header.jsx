import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';

const NAV_LINKS = [
    { to: '/#projets', label: 'Projets' },
    { to: '/#competences', label: 'Compétences' },
    { to: '/#parcours', label: 'Parcours' },
    { to: '/#veille', label: 'Veille' },
    { to: '/#contact', label: 'Contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === 'Escape') setIsOpen(false);
        }
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Floane" width={141} height={48} />
            </Link>

            <button
                type="button"
                className={styles.burger}
                aria-expanded={isOpen}
                aria-controls="main-nav"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                <span className={styles.srOnly}>{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            </button>

            <nav 
                id="main-nav"
                aria-label="Navigation principale"
                className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
            >
                <ul className={styles.navList}>
                    {NAV_LINKS.map((link) => (
                    <li key={link.to}>
                         <Link
                            to={link.to}
                            className={styles.navLink}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;