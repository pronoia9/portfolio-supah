import { Section, OverlayContainer } from '/src/components';
import { showcase as data } from '/src/assets/data';

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
