import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';
import { PROJECT_TYPES } from '../../data/projects';
import styles from './Card.module.scss';

function Card({ project }) {
    const { slug, title, tagline, type, domains, stack } = project;

    return (
        <Link to={`/projets/${slug}`} className={styles.card}>
        <Badge variant="context">{PROJECT_TYPES[type]}</Badge>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tagline}>{tagline}</p>

        <ul className={styles.tags}>
            {stack.slice(0, 3).map((tech) => (
            <li key={tech.name}>
                <Badge variant="accent">{tech.name}</Badge>
            </li>
            ))}
        </ul>
        </Link>
    );
}

export default Card;