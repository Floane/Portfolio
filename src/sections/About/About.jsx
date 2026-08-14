import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import styles from './About.module.scss';

function About() {
    return (
        <section className={styles.about} id="a-propos">
            <SectionTitle label="Qui je suis">À propos</SectionTitle>

            <div className={styles.content}>
                <p className={styles.text}>
                    Je me destinais d'abord aux sciences : un bac maths, physique appliquée et sciences de l'ingénieur, puis une prépa PTSI, mais je n'y ai pas trouvé ce que je cherchais. 
                    C'est en me réorientant vers l'informatique que j'ai trouvé ma voie : j'y ai découvert le développement web, et je n'ai plus lâché. 
                    Je me suis spécialisée avec la formation Développeuse web chez OpenClassrooms, et l'an prochain je poursuis en full-stack, pour compléter ce que je maîtrise déjà côté front d'une vraie aisance côté back.
                </p>
                <p className={styles.text}>
                    Ce qui me plaît dans ce métier, c'est de voir le résultat de ce que je code apparaître sous mes yeux, ce mélange de logique et de concret. 
                    Et puis il y a ce petit côté perfectionniste : pour moi, un site n'est pas vraiment abouti tant qu'il n'est pas accessible à tous et rapide. 
                    C'est normal qu'un site soit utilisable par n'importe qui, et j'aime l'idée de faire les choses bien jusqu'au bout.
                </p>

                <a href="#" download>
                    <Button variant="secondary">Télécharger mon CV</Button>
                </a>
            </div>
        </section>
    );
}

export default About;