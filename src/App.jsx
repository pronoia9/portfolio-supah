import { LazyMotion, domAnimation, m } from 'framer-motion';

import { Works, Experiences, Showcases, Intro, Publications, Contacts, Awards } from '/src/components';
import { containerMotion } from '/src/assets/motion';

function App() {
  return (
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
  );
}
export default App;
