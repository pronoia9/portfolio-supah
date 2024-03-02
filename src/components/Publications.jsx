import { publications as data } from '/src/utils/data';

export const Publications = () => {
  return (
    <section>
      <h2>Publications</h2>
      {data.map((publication, i) => (
        <Publication key={`publication-${i}`} {...publication} />
      ))}
    </section>
  );
};

export const Publication = ({ date, title, description, link }) => {
  return (
    <div className='cv-work'>
      <div className='years'>
        {title} - {date}
      </div>
      <h3>
        <a href={link} target='_blank'>
          {description}
        </a>
      </h3>
    </div>
  );
};
