import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { m } from 'framer-motion';

import { intro as data } from '/src/assets/data';
import { sectionMotion, drawMotion } from '/src/assets/motion';

export const Intro = () => {
  const $root = useRef(),
    $svg = useRef(),
    $intro = useRef(),
    $animate = useRef();

  const handleResize = () => {
    const width = $root.current.clientWidth;
    const height = (width * 121) / 874.13;
    $svg.current.style.width = `${width}px`;
    $svg.current.style.height = `${height}px`;
  };

  useEffect(() => {
    handleResize();

    // const tl = gsap.timeline({ delay: 0.5 });

    for (let i = 0; i < $animate.current.children.length; i++) {
    //   const child = $animate.current.children[i];
    //   const dash = child.getTotalLength();
    //   child.style.strokeDasharray = dash;
    //   child.style.strokeDashoffset = dash;
    //   tl.to(child, { strokeDashoffset: 0, ease: 'power3.out', duration: 1.3 }, '<=0.1');
    }

    // gsap.set($svg.current, { opacity: 1 });
    // gsap.to($intro.current, { opacity: 1, delay: 2, ease: 'power3.out', duration: 2 });
  }, []);

  // Event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <div ref={$root}>
      <SVG ref={$svg} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 874.13 121' style={{ opacity: 0 }} {...sectionMotion}>
        <title>
          <h1>Hello</h1>
        </title>

        <m.g id='animate' ref={$animate}>
          <m.line className='cls-1' x1='9.37' x2='9.37' y2='121' />
          <m.line className='cls-1' y1='58.56' x2='95.13' y2='58.56' />
          <m.line className='cls-1' x1='85.48' x2='85.48' y2='120.56' />
          <m.path
            className='cls-1'
            d='M110.81,74.94h76.45s0-35.2-31.63-35.2c0,0-34.26-1.88-34.26,33.88,0,0-.18,39.91,34.26,39.91,27.59,0,31.63-24.47,31.63-24.47'
          />
          <m.line className='cls-1' x1='222.34' x2='222.34' y2='121.21' />
          <m.line className='cls-1' x1='262.34' x2='262.34' y2='121.21' />
          <m.path
            className='cls-1'
            d='M325.09,41H334c19.44.69,33.08,15.37,33.08,35.75,0,20.88-14.31,35.78-34.52,35.78-20.37,0-34.52-14.9-34.52-35.78,0-20.1,13.12-34.67,32.28-35.72'
          />
        </m.g>
        <m.g>
          <m.circle className='cls-2' cx='565.18' cy='70.53' r='29.68' transform='translate(-2.85 112.32) rotate(-11.32)' />
          <m.ellipse className='cls-2' cx='332.55' cy='76.78' rx='25.26' ry='27.78' />
          <m.path className='cls-2' d='M154.41,47.48c-11.62,0-19.87,7.08-22.57,19.7h44.79C175.45,55.73,167.88,47.48,154.41,47.48Z' />
          <m.path
            className='cls-2'
            d='M.17-69.87H-69.46v276.7h1021V-69.87ZM860.08,1.35l13.85,13.9-48,48L811.51,48.78,858.94,1.35ZM95.31,119.21H75.44V66.34H19.87v52.87H.17V1.35h19.7V49H75.44V1.35H95.31ZM196,81.21H131.17C132.85,95.86,142.28,105,155.75,105c11.12,0,19-5.22,21.22-14.48l17.34,4.38c-4.54,16.33-19,25.76-38.89,25.76-26.94,0-42.27-20.88-42.27-43.78S127.63,33,154.58,33c27.27,0,41.75,19.87,41.75,40.58,0,2.53-.16,6.06-.33,7.58Zm35.69,38.05H213.34V1.35h18.35Zm40.08,0H253.41V1.35h18.36Zm61,1.35c-25.59,0-43.78-18.35-43.78-43.78S307.17,33,332.72,33,376.5,51.36,376.5,76.78s-18.33,43.78-43.78,43.78ZM504.17'
          />
        </m.g>
      </SVG>

      <IntroContainer className='intro' ref={$intro} {...sectionMotion}>
        <strong>{data.title}</strong>
        <br />
        {data.subtitle.map((subtitle, i) => (
          <span key={`intro-sub-${i}`}>
            {subtitle}
            {i < data.subtitle.length - 1 && <br />}
            {/* : <a href='https://studiogusto.com' target='_blank'>studiogusto</a> */}
          </span>
        ))}
      </IntroContainer>
    </div>
  );
};

const SVG = styled(m.svg)`
  .cls-1 {
    stroke-width: 21px;
    fill: none;
    stroke: var(--c-font);
    stroke-miterlimit: 10;
  }

  .cls-2 {
    fill: var(--c-background);
  }
`;

const IntroContainer = styled(m.div)`
  opacity: 0;
  margin-top: 6rem;
  font-size: 2rem;
  line-height: 1.3;

  strong {
    font-size: 3rem;
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 300;
  }

  @media (max-width: 440px) {
    strong {
      font-size: 2.6rem;
    }
  }
`;
