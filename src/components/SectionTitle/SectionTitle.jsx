import styles from './SectionTitle.module.scss';

function SectionTitle({ children, label }) {
    return (
    <div className={styles.wrapper}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>{children}</h2>
    </div>
    );
}

export default SectionTitle;