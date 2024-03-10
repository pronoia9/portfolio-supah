import { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

// Incoming Data
// showcase = name, link, image
// work     = name, link, image, tags, num
// contact  = name, link
export const OverlayContainer = ({ num, link, name, image, tags }) => {
  const $root = useRef(), $overlay = useRef(), $link = useRef();

  const handleMouseEnter = (e) => {
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;
    gsap.to($link.current, { x: '2rem', duration: 0.5, ease: 'power3.out' });
    gsap.fromTo($overlay.current, { scaleY: 0, transformOrigin: top ? '0 0' : '0 100%' }, { scale: 1, duration: 0.5, ease: 'power3.out' });
  };

  const handleMouseLeave = (e) => {
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;
    gsap.killTweensOf([$overlay.current, $link.current]);
    gsap.to($link.current, { x: 0, duration: 0.3, ease: 'power3.out' });
    gsap.to($overlay.current, { scaleY: 0, transformOrigin: top ? '0 0' : '0 100%', duration: 0.7, ease: 'power3.out' });
  };

  return (
    <a ref={$root} href={link} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {image && <img src={image} alt={name} />}
      <span className='link' ref={$link}>
        {num && <em>{num}</em>}
        {` ${name}`}
      </span>
      <span className='overlay' ref={$overlay} />
    </a>
  );
};

export const ShowcaseContainer = styled.div`
  &,
  a {
    font-size: 3rem;
    font-weight: 500;

    @media (max-width: 440px) {
      font-size: 2rem;
    }
  }

  a {
    background: #fff;
    padding: 1rem 0;
    display: block;
    position: relative;
    z-index: 1;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: -1px;
    display: flex;
    align-items: center;

    &:visited:after {
      color: #000;
    }

    &:after {
      content: '✓';
      position: absolute;
      right: 10px;
      color: #fff;

      @media (max-width: 440px) {
        -webkit-transform: none !important;
        transform: none !important;
        font-size: 1.5rem;
        top: 15px;
        right: 4px;
      }
    }
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

  span {
    pointer-events: none;
    display: inline-block;
  }
`;

export const WorkContainer = styled(ShowcaseContainer)`
  &, a {
    font-size: 1.8rem;
  }

  a {
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

export const ContactContainer = styled(WorkContainer)``;
