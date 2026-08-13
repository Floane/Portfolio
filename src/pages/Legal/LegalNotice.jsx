import styles from './Legal.module.scss';

function LegalNotice() {
    return (
        <article className={styles.legal}>
            <h1 className={styles.title}>Mentions légales</h1>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Éditeur du site</h2>
                <p className={styles.text}>
                    {`Ce site est édité à titre personnel par Floane Varathen, en qualité de particulier (étudiante en développement web).`}
                </p>
                <p className={styles.text}>Contact : fvarathen@gmail.com</p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Directrice de la publication</h2>
                <p className={styles.text}>Floane Varathen.</p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Hébergeur</h2>
                <p className={styles.text}>
                    {`Le site est hébergé par Vercel Inc.`}
                    <br />
                    {`340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis`}
                    <br />
                    <a
                        href="https://vercel.com"
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://vercel.com
                    </a>
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Propriété intellectuelle</h2>
                <p className={styles.text}>
                    {`L'ensemble des contenus présents sur ce site (textes, visuels, code source, descriptions de projets) est la propriété de Floane Varathen, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite.`}
                </p>
                <p className={styles.text}>
                    {`Les projets réalisés dans un cadre professionnel sont présentés avec l'accord des parties concernées et restent la propriété de leurs commanditaires respectifs. Les captures d'écran illustrant ces projets proviennent de sites accessibles publiquement. Les projets réalisés dans un cadre de formation sont identifiés comme tels.`}
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Responsabilité</h2>
                <p className={styles.text}>
                    {`L'éditrice s'efforce de fournir des informations exactes et à jour. Elle ne saurait toutefois être tenue responsable des erreurs, d'une absence de disponibilité des informations, ou de la présence de virus sur le site.`}
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Liens externes</h2>
                <p className={styles.text}>
                    {`Ce site peut contenir des liens vers des sites tiers (GitHub, LinkedIn, sites de démonstration). L'éditrice n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.`}
                </p>
            </section>
        </article>
    );
}

export default LegalNotice;