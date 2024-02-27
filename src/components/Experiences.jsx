import { experiences as data } from 'utils/data';

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
    <div className='cv-work'>
      <div className='years'>{year}</div>
      <h3>
        ${position}
        {company && (
          <>
            {' '}@{' '}
            <a href={link} target='_blank'>
              ${company}
            </a>
          </>
        )}
      </h3>
    </div>
  );
};
