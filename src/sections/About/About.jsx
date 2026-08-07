import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import styles from './About.module.scss';

function About() {
    return (
        <section className={styles.about} id="a-propos">
            <SectionTitle label="Qui je suis">À propos</SectionTitle>

            <div className={styles.content}>
                <p className={styles.text}>
                    Après un bac scientifique, je me suis orientée vers l'informatique en
                    passant par les sciences de l'ingénieur et la physique. C'est en
                    explorant ce domaine que j'ai découvert le développement web et la
                    combinaison de logique technique et de résultat visible immédiat m'a
                    convaincue d'en faire mon métier.
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                </p>

                <a href="#" download>
                    <Button variant="secondary">Télécharger mon CV</Button>
                </a>
            </div>
        </section>
    );
}

export default About;