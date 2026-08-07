import styles from './Badge.module.scss';

function Badge({ children, variant = 'outline' }) {
    return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>;
}

export default Badge;