import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Journey.module.scss';

const STEPS = [
    {
        period: 'Bac scientifique + prépa',
        title: 'Un socle scientifique',
        description: 'Bac maths, physique et SI, puis prépa PTSI. J\'y ai appris la rigueur et la logique.',
    },
    {
        period: 'Réorientation',
        title: 'Le déclic',
        description: 'En passant à l\'informatique, j\'ai découvert le développement web. Je n\'ai plus lâché.',
    },
    {
        period: '2024-2026',
        title: 'La spécialisation',
        description: 'Formation Développeuse web chez OpenClassrooms, en alternance chez Digital Innovest.',
    },
    {
        period: '2026-2027',
        title: 'La suite',
        description: 'Développeuse full-stack, pour compléter le front par le back.',
        current: true,
    },
];

function Journey() {
    return (
        <section className={styles.journey} id="parcours">
        <SectionTitle label="D'où je viens">Parcours</SectionTitle>

            <ol className={styles.timeline}>
                {STEPS.map((step, index) => (
                    <li
                        key={index}
                        className={`${styles.step} ${step.current ? styles.current : ''}`}
                    >
                        <span className={styles.period}>{step.period}</span>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.description}>{step.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Journey;