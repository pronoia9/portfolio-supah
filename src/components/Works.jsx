import styled from 'styled-components';

import { WorkContainer, OverlayContainer } from '/src/components/Containers';
import { works as data } from '/src/assets/data';

export const Works = () => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>

      <Container className='experiments'>
        {data.data.map((exp, i) => (
          <WorkContainer key={`experiment-${i}`} className='experiment'>
            <OverlayContainer num={i + 1 < 10 ? `0${i + 1}` : i + 1} {...exp} />
          </WorkContainer>
        ))}
      </Container>
    </section>
  );
};

const Container = styled.div`
  /* -webkit-columns: 2; */
  column-count: 2;

  @media (max-width: 640px) {
    -webkit-columns: 1;
    column-count: 1;
  }
`;
