import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Skills.module.scss';

const SKILL_GROUPS = [
    {
        title: 'Front-end',
        skills: ['React', 'JavaScript', 'Sass', 'HTML / CSS'],
    },
    {
        title: 'Back-end',
        skills: ['Node.js', 'Express', 'MongoDB', 'PHP'],
    },
    {
        title: 'Qualité',
        skills: ['Accessibilité', 'Performance', 'SEO', 'Responsive'],
    },
    {
        title: 'Outils',
        skills: ['Git', 'Vite', 'WordPress', 'Figma'],
    },
];

function Skills() {
    return (
        <section className={styles.skills} id="competences">
            <SectionTitle label="Ce que je maîtrise">Compétences</SectionTitle>

            <div className={styles.grid}>
                {SKILL_GROUPS.map((group) => (
                    <div key={group.title} className={styles.group}>
                        <h3 className={styles.groupTitle}>{group.title}</h3>
                        <ul className={styles.list}>
                            {group.skills.map((skill) => (
                                <li key={skill} className={styles.item}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;