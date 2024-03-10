import styled from 'styled-components';
import { experiences as data } from '/src/assets/data';

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

export const Experience = ({ year, position, company, link, title, date, description }) => {
  return (
    <Container className='cv-work'>
      <div className='years'>
        {year && year}
        {title && date && `${title} - ${date}`}
      </div>

      <h3>
        {position && position}
        {company && (
          <>
            {' '}@{' '}
            <a href={link} target='_blank'>
              {company}
            </a>
          </>
        )}
        {description && (
          <a href={link} target='_blank'>
            {description}
          </a>
        )}
      </h3>
    </Container>
  );
};

export const Container = styled.div`
  display: block;
  padding: 2rem 0;
  font-size: 1.6rem;
  border-bottom: 1px solid var(--c-font);

  h3 {
    font-size: 1.8rem;
  }

  .years {
    font-size: 1.4rem;
    margin-bottom: 3px;
  }

  a {
    border-bottom: 1px dashed var(--c-font);
  }
`;
