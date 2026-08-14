import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import styles from './Contact.module.scss';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function validate() {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'J\'aimerais savoir à qui je réponds.';
        if (!formData.email.trim()) newErrors.email = 'Il me faut un email pour vous répondre.';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Cet email a l\'air incomplet, pouvez-vous vérifier ?';
        if (!formData.message.trim()) newErrors.message = 'Le message est un peu vide.';
        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setStatus('sending');
        setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        }, 1000);
    }

    return (
        <section className={styles.contact} id="contact">
            <SectionTitle label="Dites-moi bonjour">Contact</SectionTitle>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Votre nom</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                        <span id="name-error" className={styles.error}>{errors.name}</span>
                    )}
                </div>

                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Votre email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                        <span id="email-error" className={styles.error}>{errors.email}</span>
                    )}
                </div>

                <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Votre message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                        <span id="message-error" className={styles.error}>{errors.message}</span>
                    )}
                </div>

                <Button type="submit" variant="primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer'}
                </Button>

                <p aria-live="polite" className={styles.status}>
                    {status === 'success' && 'C\'est envoyé ! Je vous réponds au plus vite.'}
                    {status === 'error' && 'Aïe, le message n\'est pas parti. Réessayez, ou écrivez-moi à fvarathen@gmail.com'}
                </p>
            </form>
        </section>
    );
}

export default Contact;