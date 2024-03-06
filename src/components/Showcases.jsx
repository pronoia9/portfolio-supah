import { useRef } from 'react';
import gsap from 'gsap';
// import HTMLParse from 'react-html-parser';
import styled from 'styled-components';

import { showcase as data } from '/src/utils/data';

export const Showcases = () => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>

      <div className='works'>
        {data.data.map((work, i) => (
          <Container className='work' key={`showcase-${i}`}>
            <Showcase {...work} />
          </Container>
        ))}
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
export const Showcase = ({ link, name, image }) => {
  const $root = useRef();
  const $overlay = useRef();
  const $link = useRef();

  const handleMouseEnter = (e) => {
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    gsap.to($link.current, {
      x: '2rem',
      duration: 0.5,
      ease: 'power3.out',
    });
    gsap.fromTo(
      $overlay.current,
      {
        scaleY: 0,
        transformOrigin: top ? '0 0' : '0 100%',
      },
      {
        scale: 1,
        duration: 0.5,
        ease: 'power3.out',
      }
    );
  };

  const handleMouseLeave = (e) => {
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    gsap.killTweensOf([$overlay.current, $link.current]);
    gsap.to($link.current, {
      x: 0,
      duration: 0.3,
      ease: 'power3.out',
    });
    gsap.to($overlay.current, {
      scaleY: 0,
      transformOrigin: top ? '0 0' : '0 100%',
      duration: 0.7,
      ease: 'power3.out',
    });
  };

  return (
    <a ref={$root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link} target='_blank'>
      {image && <img src={image} alt={name} />}
      <span className='link' ref={$link}>
        {/* {HTMLParse(name)} */}
        {name}
      </span>
      <span className='overlay' ref={$overlay} />
    </a>
  );
};

const Container = styled.div`
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 440px) {
    font-size: 2rem;
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
  }

  a:visited:after {
    color: #000;
  }

  a:after {
    content: 'âœ“';
    position: absolute;
    right: 10px;
    color: #fff;
  }

  @media (max-width: 440px) {
    a:after {
      -webkit-transform: none !important;
      transform: none !important;
      font-size: 1.5rem;
      top: 15px;
      right: 4px;
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
