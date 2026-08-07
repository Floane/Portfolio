import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Journey.module.scss';

const STEPS = [
    {
        period: 'Bac scientifique',
        title: 'Sciences de l\'ingénieur, physique, informatique',
        description: 'La découverte de la logique technique et du goût pour résoudre des problèmes.',
    },
    {
        period: 'Formation',
        title: 'Développeuse web — OpenClassrooms',
        description: 'React, JavaScript, Node.js. La confirmation que le développement web était ma voie.',
    },
    {
        period: 'Alternance',
        title: 'Digital Innovest',
        description: 'Projets clients réels : intégration, PHP, WordPress, accessibilité en production.',
    },
    {
        period: '2026 →',
        title: 'Formation Développeuse Full-Stack',
        description: 'Compléter ma pratique front d\'une vraie maîtrise back-end.',
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