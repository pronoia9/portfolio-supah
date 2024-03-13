import { useRef } from 'react';
import { m, animate } from 'framer-motion';

import { sectionMotion } from '../assets/motion';

export const Section = ({ children, ...props }) => (
  <m.section {...sectionMotion()} {...props}>
    {children}
  </m.section>
);

export const OverlayContainer = ({ num, link, name, image, tags }) => {
  const $root = useRef(), $overlay = useRef(), $link = useRef();

  const getTop = (e) => {
    const bounds = $root.current.getBoundingClientRect();
    return e.clientY < bounds.y + bounds.height / 2;
  };

  const handleMouseEnter = (e) => {
    // Animate the link
    animate($link.current, { x: '2rem' }, { duration: 0.5 });
    // Animate the overlay
    animate($overlay.current, { scaleY: 1, transformOrigin: getTop(e) ? 'top' : 'bottom' }, { duration: 0.5 });
  };

  const handleMouseLeave = (e) => {
    // Animate the link
    animate($link.current, { x: 0 }, { duration: 0.3 });
    // Animate the overlay
    animate($overlay.current, { scaleY: 0, transformOrigin: getTop(e) ? 'top' : 'bottom' }, { duration: 0.7 });
  };

  return (
    <a ref={$root} href={link} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {image && <img src={image} alt={name} />}

      <m.span ref={$link} className='link' transition={{ type: 'tween', ease: 'easeOut' }}>
        {num && <em>{num}</em>}
        {` ${name}`}
      </m.span>

      <m.span ref={$overlay} className='overlay' transition={{ type: 'tween', ease: 'easeOut' }} />
    </a>
  );
};
