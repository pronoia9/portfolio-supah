import { useRef } from 'react';
import gsap from 'gsap';
// import HTMLParse from 'react-html-parser';

import { works as data } from 'utils/data';

export const Showcases = () => {
  return (
    <section>
      <h2>Selected Works</h2>
      <p>A selection of projects from 2021 to 2024 in which I collaborate as fullstack/creative developer.</p>
      <div className='works'>
        {data.map((work, i) => (
          <div className='work' key={i.toString()}>
            <Showcase image={work.image} link={work.link} name={work.name} />
          </div>
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
      <span className='overlay' ref={$overlay}></span>
    </a>
  );
};
