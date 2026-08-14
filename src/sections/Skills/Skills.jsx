import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {
    Atom, Braces, Palette, FileCode,
    Hexagon, Route, Database, Terminal,
    PersonStanding, Gauge, Search, MonitorSmartphone,
    GitBranch, Zap, LayoutTemplate, PenTool,
} from 'lucide-react';
import styles from './Skills.module.scss';

const SKILL_GROUPS = [
    {
        title: 'Front-end',
        skills: [
            { name: 'React', Icon: Atom },
            { name: 'JavaScript', Icon: Braces },
            { name: 'Sass', Icon: Palette },
            { name: 'HTML / CSS', Icon: FileCode },
        ],
    },
    {
        title: 'Back-end',
        skills: [
            { name: 'Node.js', Icon: Hexagon },
            { name: 'Express', Icon: Route },
            { name: 'MongoDB', Icon: Database },
            { name: 'PHP', Icon: Terminal },
        ],
    },
    {
        title: 'Qualité',
        skills: [
            { name: 'Accessibilité', Icon: PersonStanding },
            { name: 'Performance', Icon: Gauge },
            { name: 'SEO', Icon: Search },
            { name: 'Responsive', Icon: MonitorSmartphone },
        ],
    },
    {
        title: 'Outils',
        skills: [
            { name: 'Git', Icon: GitBranch },
            { name: 'Vite', Icon: Zap },
            { name: 'WordPress', Icon: LayoutTemplate },
            { name: 'Figma', Icon: PenTool },
        ],
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
                                <li key={skill.name} className={styles.item}>
                                    <span>{skill.name}</span>
                                    <skill.Icon size={18} className={styles.icon} aria-hidden="true" />
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