import { Section } from '.';
import { experiences as data } from '../assets/data';

export const Experiences = () => {
  return (
    <Section>
      <h2>Experience</h2>
      {data.map((exp, i) => (
        <Experience key={`experience-${i}`} {...exp} />
      ))}
    </Section>
  );
};

export const Experience = ({ year, position, company, link, title, date, description }) => {
  return (
    <div className='cv-work'>
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
    </div>
  );
};
