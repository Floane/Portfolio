import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Card from '../../components/Card/Card';
import { projects, DOMAINS } from '../../data/projects';
import { useState } from 'react';
import styles from './Projects.module.scss';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.domains.includes(activeFilter));

    const filters = [
        { key: 'all', label: 'Tous' },
        ...Object.entries(DOMAINS).map(([key, label]) => ({ key, label })),
    ];            

    return (
        <section className={styles.projects} id="projets">
            <SectionTitle label="Mon travail">Projets</SectionTitle>

            <div className={styles.filters} role="group" aria-label="Filtrer le projet par domaine">
                {filters.map((filter) => (
                    <button
                        key={filter.key}
                        type="button"
                        className={`${styles.filter} ${activeFilter === filter.key ? styles.active : ''}`}
                        aria-pressed={activeFilter === filter.key}
                        onClick={() => setActiveFilter(filter.key)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <p className={styles.count} aria-live="polite">
                {filteredProjects.length} project{filteredProjects.length > 1 ? 's' : ''}
            </p>

            <ul className={styles.grid} key={activeFilter}> 
                {filteredProjects.map((project) => (
                    <li key={project.id}>
                        <Card project={project} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;