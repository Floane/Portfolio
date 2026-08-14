import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Watch.module.scss';

const WATCH_AREAS = [
    {
        title: 'Les technologies de mes projets',
        description:
        'J\'essaie de rester à jour sur les outils que j\'utilise vraiment : React, JavaScript, tout mon environnement de travail. Pour rester à jour, je suis les blogs officiels et les nouveautés. Je garde également un oeil du côté de l\'IA, qui change rapidement notre façon de travailler.',
        sources: ['Blogs officiels', 'Notes de version GitHub'],
    },
    {
        title: 'Les fondamentaux du métier',
        description:
        'L\'accessibilité et la sécurité, ce sont les deux sujets qui me tiennent également à cœur. Plus je creuse, plus j\'ai envie de bien faire. Je m\'intéresse également au design, je ne suis pas très douée pour ça, je l\'avoue. Mais comprendre ce qui rend une interface agréable m\'aide à mieux construire les miennes.',
        sources: ['WebAIM', 'OWASP'],
    },
];

function Watch() {
    return (
        <section className={styles.watch} id="veille">
            <SectionTitle label="Ce que je surveille">Veille</SectionTitle>
            <p className={styles.description}>J'aime apprendre, tout simplement. Le développement bouge vite, et c'est une des choses qui me plaît : il y a toujours quelque chose de nouveau à découvrir.</p>

            <div className={styles.grid}>
                {WATCH_AREAS.map((area) => (
                    <article key={area.title} className={styles.area}>
                        <h3 className={styles.areaTitle}>{area.title}</h3>
                        <p className={styles.description}>{area.description}</p>
                        <ul className={styles.sources}>
                            {area.sources.map((source) => (
                                <li key={source} className={styles.source}>
                                    {source}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Watch;