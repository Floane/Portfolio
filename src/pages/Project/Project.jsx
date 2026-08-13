import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Badge from '../../components/Badge/Badge';
import { projects, PROJECT_TYPES } from '../../data/projects';
import styles from './Project.module.scss';

function Project() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/#projets" replace />;
    }

    const { type, title, tagline, context, objectives, skills, stack, results, improvements, metrics, links, } = project;

    return (
        <article className={styles.project}>
            <Link to="/#projets" className={styles.back}>
                <ArrowLeft size={16} aria-hidden="true" />
                Retour aux projets
            </Link>

            <header className={styles.header}>
                <Badge variant="context">{PROJECT_TYPES[type]}</Badge>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.tagline}>{tagline}</p>

                <ul className={styles.stack}>
                    {stack.map((tech) => (
                        <li key={tech.name}>
                            <Badge variant="accent">{tech.name}</Badge>
                        </li>
                    ))}
                </ul>
            </header>

            <div className={styles.content}>
                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Contexte</h2>
                    <p className={styles.text}>{context}</p>
                </section>

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Objectifs</h2>
                    <p className={styles.text}>{objectives}</p>
                </section>

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Compétences développées</h2>
                    <p className={styles.text}>{skills}</p>
                </section>

                {metrics && metrics.length > 0 && (
                    <section className={styles.blocks}>
                        <h2 className={styles.blockTitle}>Résultats mesurés</h2>
                        <ul className={styles.metrics}>
                            {metrics.map((metric) => (
                                <li key={metric.label} className={styles.metric}>
                                <span className={styles.metricLabel}>{metric.label}</span>
                                <span className={styles.metricValues}>
                                    <span className={styles.before}>{metric.before}</span>
                                    <ArrowRight size={16} className={styles.arrow} aria-hidden="true" />
                                    <span className={styles.srOnly}>passé à</span>
                                    <span className={styles.after}>{metric.after}</span>
                                </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Résultats et impact</h2>
                    <p className={styles.text}>{results}</p>
                </section>

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Perspectives d'amélioration</h2>
                    <p className={styles.text}>{improvements}</p>
                </section>

                {(links.repo || links.demo) && (
                    <section className={styles.block}>
                        <h2 className={styles.blockTitle}>Liens</h2>
                        <div className={styles.links}>
                            {links.repo && (
                                <a href={links.repo} className={styles.projectLink} target="_blank" rel="noreferrer">
                                Code source
                                    <span className={styles.srOnly}> (nouvel onglet)</span>
                                </a>
                            )}
                            {links.demo && (
                                <a href={links.demo} className={styles.projectLink} target="_blank" rel="noreferrer">
                                Démo en ligne
                                    <span className={styles.srOnly}> (nouvel onglet)</span>
                                </a>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}

export default Project;