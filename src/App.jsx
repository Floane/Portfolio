import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Journey from './sections/Journey/Journey';
import Watch from './sections/Watch/Watch';
import Contact from './sections/Contact/Contact';

function App() {
    return (
        <>
            <title>Floane Varathen | Développeuse front-end & accessibilité</title>
            <meta name="description" content="Développeuse front-end spécialisée en accessibilité et performance. Découvrez mes projets React, mon parcours et ma façon de construire des sites performants et accessibles à tous." />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://floanevarathen.vercel.app/" />

            <Hero />
            <About />
            <Projects />
            <Skills />
            <Journey />
            <Watch />
            <Contact />
        </>
    );
}

export default App;