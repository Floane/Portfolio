import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { href: '#projets', label: 'Projets' },
    { href: '#competences', label: 'Compétences' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#veille', label: 'Veille' },
    { href: '#contact', label: 'Contact' },
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
            <a href="#accueil" className={styles.logo}>
                Floane<span className={styles.dot}>.</span>V
            </a>

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
                    <li key={link.href}>
                        <a href={link.href} className={styles.navLink} onClick={() => setIsOpen(false)}>
                        {link.label}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;