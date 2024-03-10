import { Work } from '/src/components';
import { showcase as data } from '/src/utils/data';

export const Showcases = () => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>

      <div className='works'>
        {data.data.map((work, i) => (
          <Work key={`showcase-${i}`} {...work} />
        ))}
      </div>
    </section>
  );
};
