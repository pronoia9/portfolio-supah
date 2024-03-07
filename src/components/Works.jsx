import styled from 'styled-components';

import { Showcase } from './Showcases';
import { works as data } from '/src/utils/data';

export const Works = () => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <Container className='experiments'>
        {data.data.map((exp, i) => {
          const num = i + 1 < 10 ? `0${i + 1}` : i + 1;
          return (
            <Wrapper className='experiment' key={`experiment-${i}`}>
              <Showcase name={`<em>${num}</em> ${exp.name}`} {...exp} />
            </Wrapper>
          );
        })}
      </Container>
    </section>
  );
};

const Container = styled.div`
  -webkit-columns: 2;
  column-count: 2;

  @media (max-width: 640px) {
    -webkit-columns: 1;
    column-count: 1;
  }
`;

const Wrapper = styled.div`
  font-size: 1.8rem;
  font-weight: 500;

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
    content: 'âœ“';
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
