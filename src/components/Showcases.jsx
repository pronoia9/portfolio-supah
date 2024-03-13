import { Section, OverlayContainer } from '.';
import { showcase as data } from '../assets/data';

export const Showcases = () => {
  return (
    <Section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>

      <div className='works'>
        {data.data.map((work, i) => (
          <div key={`showcase-${i}`} className='work'>
            <OverlayContainer {...work} />
          </div>
        ))}
      </div>
    </Section>
  );
};
