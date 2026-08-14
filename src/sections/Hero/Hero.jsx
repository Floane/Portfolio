import Button from '../../components/Button/Button';
import styles from './Hero.module.scss';

function Hero() {
    return (
    <section className={styles.hero} id="accueil">
        <p className={styles.label}>
            Développeuse front-end · Accessibilité · Performance
        </p>

        <h1 className={styles.name}>
            <span className={styles.firstName}>Floane</span>
            <span className={styles.lastName}>Varathen</span>
        </h1>

        <p className={styles.tagline}>
            Passionnée par le développement web et un peu perfectionniste : pour moi, un site n'est pas vraiment fini tant qu'il n'est pas accessible à tous et rapide.
        </p>

        <div className={styles.actions}>
            <Button variant="primary" onClick={() => scrollToSection('projets')}>
                Voir les projets
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('contact')}>
                Me contacter
            </Button>
        </div>
    </section>
    );
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default Hero;