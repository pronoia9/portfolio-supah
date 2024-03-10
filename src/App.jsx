import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import { Works, Experiences, Showcases, Intro, Publications, Contacts, Awards } from '/src/components';
import { GlobalStyles, themes } from '/src/assets/GlobalStyles';
import { containerMotion } from '/src/assets/motion';

function App() {
  const [theme, setTheme] = useState(getSystemTheme);

  // Event listener for system theme change
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <LazyMotion features={domAnimation}>
        <m.div {...containerMotion}>
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
          <section className='goodbye'>Thanks Supah 👋</section>
        </m.div>
      </LazyMotion>
    </ThemeProvider>
  );
}
export default App;

const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const systemThemeChangeHandler = (e, setTheme) => {
  setTheme(e.matches ? 'dark' : 'light');
};

const getTheme = (theme) => (theme === 'light' ? themes.light : themes.dark);
