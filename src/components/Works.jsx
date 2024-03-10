import { useRef } from 'react';
// import HTMLParse from 'react-html-parser';
import styled from 'styled-components';
import gsap from 'gsap';

import { works as data } from '/src/utils/data';

export const Works = () => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>

      <WorksContainer className='experiments'>
        {data.data.map((exp, i) => {
          const num = i + 1 < 10 ? `0${i + 1}` : i + 1;
          return (
            <WorksWrapper className='experiment' key={`experiment-${i}`}>
              <Work name={`<em>${num}</em> ${exp.name}`} {...exp} />
            </WorksWrapper>
          );
        })}
      </WorksContainer>
    </section>
  );
};

const WorksContainer = styled.div`
  -webkit-columns: 2;
  column-count: 2;

  @media (max-width: 640px) {
    -webkit-columns: 1;
    column-count: 1;
  }
`;

const WorksWrapper = styled.div`
  &, a {
    font-size: 1.8rem !important;
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

  a img {
    width: auto;
    height: 60px;
    margin-right: 10px;
  }

  a:visited:after {
    color: #000;
  }

  a:after {
    content: '✓';
    position: absolute;
    right: 10px;
    color: #fff;
  }

  em {
    font-weight: 300;
    font-size: 1.2rem;
    font-style: normal;
    display: inline-block;
    width: 17px;
  }

  span {
    display: inline-block;
    pointer-events: none;
  }
`;

export const Work = ({ link, name, image, ...props }) => {
  const $root = useRef(),
    $overlay = useRef(),
    $link = useRef();

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
    <WorkItem className='work' {...props}>
      <a ref={$root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link} target='_blank'>
        {image && <img src={image} alt={name} />}
        <span className='link' ref={$link}>
          {name}
          {/* {HTMLParse(name)} */}
        </span>
        <span className='overlay' ref={$overlay} />
      </a>
    </WorkItem>
  );
};

const WorkItem = styled.div`
  &, a {
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
