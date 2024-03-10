import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';

import { Works, Experiences, Showcases, Intro, Publications, Contacts, Awards } from '/src/components';
import { GlobalStyles, themes } from '/src/assets/GlobalStyles';

function App() {
  const [theme, setTheme] = useState(getSystemTheme);

  // Event listener for system theme change
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  useEffect(() => {
    gsap.to('section', { opacity: 1, delay: 3, ease: 'power3.out', duration: 2 });
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
        <section className='goodbye'>Thanks Supah 👋</section>
      </div>
    </ThemeProvider>
  );
}
export default App;

const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };

const getTheme = (theme) => (theme === 'light' ? themes.light : themes.dark);
