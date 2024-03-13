import { Section, OverlayContainer } from '.';
import { works as data } from '../assets/data';

export const Works = () => {
  return (
    <Section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>

      <div className='experiments'>
        {data.data.map((exp, i) => (
          <div key={`experiment-${i}`} className='experiment'>
            <OverlayContainer num={i + 1 < 10 ? `0${i + 1}` : i + 1} {...exp} />
          </div>
        ))}
      </div>
    </Section>
  );
};
