import { useRef } from 'react';
import styled from 'styled-components';
import { m, animate } from 'framer-motion';

import { sectionMotion } from '/src/assets/motion';

export const Section = ({ children, ...props }) => (
  <m.section {...sectionMotion()} {...props}>
    {children}
  </m.section>
);

export const ShowcaseContainer = styled.div`
  a {
    font-size: 3rem;
    font-weight: 500;
  }

  img {
    width: auto;
    height: 80px;
    margin-right: 10px;
  }

  em {
    font-weight: 300;
    font-size: 2rem;
    font-style: normal;
  }
`;

export const WorkContainer = styled(ShowcaseContainer)`
  a {
    font-size: 1.8rem;

    img {
      height: 60px;
    }
  }

  em {
    font-size: 1.2rem;
    display: inline-block;
    width: 17px;
  }
`;

export const ContactContainer = styled.li`
  a {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

export const OverlayContainer = ({ num, link, name, image, tags }) => {
  const $root = useRef(), $overlay = useRef(), $link = useRef();

  const getTop = (e) => {
    const bounds = $root.current.getBoundingClientRect();
    return e.clientY < bounds.y + bounds.height / 2;
  };

  const handleMouseEnter = (e) => {
    // Animate the link
    animate($link.current, { x: '2rem' }, { type: 'tween', duration: 0.5, ease: 'easeOut' });
    // Animate the overlay
    animate($overlay.current, { scaleY: 1, transformOrigin: getTop(e) ? 'top' : 'bottom' }, { type: 'tween', duration: 0.5, ease: 'easeOut' });
  };

  const handleMouseLeave = (e) => {
    // Animate the link
    animate($link.current, { x: 0 }, { type: 'tween', duration: 0.3, ease: 'easeOut' });
    // Animate the overlay
    animate($overlay.current, { scaleY: 0, transformOrigin: getTop(e) ? 'top' : 'bottom' }, { type: 'tween', duration: 0.7, ease: 'easeOut' });
  };

  return (
    <OverlayLink ref={$root} href={link} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {image && <img src={image} alt={name} />}

      <m.span ref={$link} className='link'>
        {num && <em>{num}</em>}
        {` ${name}`}
      </m.span>

      <m.span ref={$overlay} className='overlay' />
    </OverlayLink>
  );
};

const OverlayLink = styled.a`
  background: var(--c-background);
  padding: 1rem 0;
  display: block;
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--c-font);
  border-bottom: 1px solid var(--c-font);
  margin-top: -1px;
  display: flex;
  align-items: center;

  @media (max-width: 440px) {
    font-size: 2rem;
  }

  &:visited:after {
    color: var(--c-font);
  }

  &:after {
    content: '✓';
    position: absolute;
    right: 10px;
    color: var(--c-background);

    @media (max-width: 440px) {
      -webkit-transform: none !important;
      transform: none !important;
      font-size: 1.5rem;
      top: 15px;
      right: 4px;
    }
  }

  span {
    pointer-events: none;
    display: inline-block;
  }

  .link {
    display: inline-block;

    @media (max-width: 440px) {
      -webkit-transform: translateX(4px) !important;
      transform: translateX(4px) !important;
    }
  }

  .overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--c-overlay);
    mix-blend-mode: difference;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    pointer-events: none;
  }
`;
