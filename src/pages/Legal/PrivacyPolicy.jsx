import styles from './Legal.module.scss';

function PrivacyPolicy() {
    return (
        <article className={styles.legal}>
            <h1 className={styles.title}>Politique de confidentialité</h1>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Préambule</h2>
                <p className={styles.text}>
                    {`La présente politique décrit quelles données personnelles sont collectées sur ce site, dans quel but, et quels sont vos droits. Elle s'inscrit dans le cadre du Règlement général sur la protection des données (RGPD).`}
                </p>
                <p className={styles.text}>
                    {`Responsable du traitement : Floane Varathen - fvarathen@gmail.com`}
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>
                Données collectées via le formulaire de contact
                </h2>
                <p className={styles.text}>
                    {`Lorsque vous utilisez le formulaire de contact, les données que vous renseignez (nom, adresse email, contenu du message) sont transmises par l'intermédiaire du service Resend afin d'acheminer votre message.`}
                </p>
                <p className={styles.text}>
                    {`Ces données servent uniquement à répondre à votre demande, sur la base de votre consentement. Elles sont destinées à Floane Varathen uniquement, ne sont ni revendues ni transmises à des tiers autres que le sous-traitant technique mentionné, et sont conservées le temps nécessaire au traitement de votre demande.`}
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Mesure d'audience</h2>
                <p className={styles.text}>
                    {`Ce site utilise Vercel Web Analytics pour mesurer sa fréquentation de manière anonyme. Cet outil ne dépose aucun cookie et ne collecte aucune donnée permettant de vous identifier personnellement. Aucune bannière de consentement n'est donc requise.`}
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Hébergement</h2>
                <p className={styles.text}>
                    {`Les données transitant par le site sont hébergées par Vercel Inc. (États-Unis). Vercel adhère à un cadre garantissant un niveau de protection adéquat pour les transferts de données.`}
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.blockTitle}>Vos droits</h2>
                <p className={styles.text}>
                    {`Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données. Pour exercer ces droits, contactez : fvarathen@gmail.com`}
                </p>
                <p className={styles.text}>
                    {`Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).`}
                </p>
            </section>
        </article>
    );
}

export default PrivacyPolicy;