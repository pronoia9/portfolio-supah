import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';

import { Works, Experiences, Showcases, Intro, Publications, Contacts, Awards } from '/src/components';
import { getTheme, systemThemeChangeHandler } from '/src/utils/utils';
import GlobalStyles from '/src/style/GlobalStyles';

function App() {
  const [theme, setTheme] = useState('light');

  // Event listener for system theme change
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  useEffect(() => {
    gsap.to('section', {
      opacity: 1,
      delay: 3,
      ease: 'power3.out',
      duration: 2,
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <div>
        <Intro />
        <Experiences />
        <Showcases />
        <Works />
        <Publications />
        <Awards />
        <Contacts />
        <br />
        <br />
        <br />
        <section className='goodbye'>Thank you 👋</section>
      </div>
    </ThemeProvider>
  );
}

export default App;
