import { useEffect } from 'react';
import gsap from 'gsap';

import { Works, Experiences, Showcases, Intro, Publications, Contacts } from 'components';

function App() {
  useEffect(() => {
    gsap.to('section', {
      opacity: 1,
      delay: 3,
      ease: 'power3.out',
      duration: 2,
    });
  }, []);

  return (
    <div>
      <Intro />
      <Experiences />
      <Showcases />
      <Works />
      <Publications />
      <Contacts />
      <br />
      <br />
      <br />
      <section className='goodbye'>Thank you 👋</section>
    </div>
  );
}

export default App;

