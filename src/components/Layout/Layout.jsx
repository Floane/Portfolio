import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

function Layout() {
    return (
        <>
            <a href="#contenu" className={styles.skipLink}>
                Aller au contenu principal
            </a>

            <Header />

            <main id="contenu">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Layout;