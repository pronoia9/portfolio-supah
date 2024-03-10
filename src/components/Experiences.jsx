import styled from 'styled-components';
import { experiences as data } from '/src/utils/data';

export const Experiences = () => {
  return (
    <section>
      <h2>Experience</h2>
      {data.map((exp, i) => (
        <Experience key={`experience-${i}`} {...exp} />
      ))}
    </section>
  );
};

export const Experience = ({ year, position, company, link }) => {
  return (
    <ExpContainer className='cv-work'>
      <div className='years'>{year}</div>
      <h3>
        {position}
        {company && (
          <>
            {' '}@{' '}
            <a href={link} target='_blank'>
              {company}
            </a>
          </>
        )}
      </h3>
    </ExpContainer>
  );
};

export const ExpContainer = styled.div`
  display: block;
  padding: 2rem 0;
  font-size: 1.6rem;
  border-bottom: 1px solid #000;

  h3 {
    font-size: 1.8rem;
  }

  .years {
    font-size: 1.4rem;
    margin-bottom: 3px;
  }

  a {
    border-bottom: 1px dashed #000;
  }
`;
