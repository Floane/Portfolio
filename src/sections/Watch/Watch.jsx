import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Watch.module.scss';

const WATCH_AREAS = [
    {
        title: 'Les technologies de mes projets',
        description:
        'React, l\'écosystème JavaScript, les outils de build. Je suis les notes de version et les blogs officiels pour rester à jour sur ce que j\'utilise au quotidien.',
        sources: ['Blogs officiels', 'Notes de version GitHub'],
    },
    {
        title: 'Les fondamentaux du métier',
        description:
        'Accessibilité et sécurité, deux sujets qui évoluent et qui structurent ma façon de travailler. Une veille de fond, pas seulement technique.',
        sources: ['WebAIM', 'OWASP'],
    },
];

function Watch() {
    return (
        <section className={styles.watch} id="veille">
            <SectionTitle label="Ce que je surveille">Veille</SectionTitle>

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