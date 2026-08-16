import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Badge from '../../components/Badge/Badge';
import { projects, PROJECT_TYPES } from '../../data/projects';
import styles from './Project.module.scss';
import NotFound from '../NotFound/NotFound';

function Project() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <NotFound />;
    }

    const { type, title, tagline, context, objectives, skills, stack, results, improvements, metrics, links, cover, images } = project;

    return (
        <>
            <title>{project.metaTitle} | Floane Varathen</title>
            <meta name="description" content={project.metaDescription} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://floanevarathen.vercel.app/projets/${slug}`} />

            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="Floane Varathen" />
            <meta property="og:title" content={project.metaTitle} />
            <meta property="og:description" content={project.metaDescription} />
            <meta property="og:url" content={`https://floanevarathen.vercel.app/projets/${slug}`} />
            <meta property="og:image" content={`https://floanevarathen.vercel.app/og-default.png`} />
            <meta name="twitter:card" content="summary_large_image" />

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

                {cover?.src && (
                    <figure className={styles.cover}>
                        <img src={cover.src} alt={cover.alt} className={styles.coverImg} />
                    </figure>
                )}

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
                                            {metric.before != null && (
                                                <>
                                                    <span className={styles.before}>{metric.before}</span>
                                                    <ArrowRight size={16} className={styles.arrow} aria-hidden="true" />
                                                    <span className={styles.srOnly}>passé à</span>
                                                </>
                                            )}
                                            <span className={styles.after}>{metric.after}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {images && images.length > 0 && (
                        <section className={styles.block}>
                            <h2 className={styles.blockTitle}>Aperçus</h2>
                            <ul className={styles.gallery}>
                                {images.map((image) => (
                                    <li key={image.src} className={styles.galleryItem}>
                                        <img src={image.src} alt={image.alt} className={styles.galleryImg} loading="lazy" />
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

                    {links && links.length > 0 && (
                        <section className={styles.block}>
                            <h2 className={styles.blockTitle}>Liens</h2>
                            <div className={styles.links}>
                                {links.map((link) => (
                                    <a key={link.url} href={link.url} className={styles.projectLink} target="_blank" rel="noreferrer">
                                        {link.label}
                                        <span className={styles.srOnly}> (nouvel onglet)</span>
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </article>
        </>
    );
}

export default Project;