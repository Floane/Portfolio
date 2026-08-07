import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './Project.module.scss';

    function Project() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/#projets" replace />;
    }

    return (
        <article className={styles.project}>
            <p className={styles.type}>{project.type}</p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.tagline}>{project.tagline}</p>
        </article>
    );
}

export default Project;