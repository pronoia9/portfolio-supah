import { Section } from '/src/components';
import { awards as data } from '/src/assets/data';

export const Awards = () => {
  return (
    <Section>
      <h2>Awards</h2>
      <ul>
        {data.map((award, i) => (
          <Award key={`awards-${i}`} award={award} />
        ))}
      </ul>
    </Section>
  );
};

export const Award = ({ award }) => {
  return <li>{award}</li>;
};
