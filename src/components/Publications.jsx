import { Section, Experience } from '.';
import { publications as data } from '../assets/data';

export const Publications = () => {
  return (
    <Section>
      <h2>Publications</h2>
      {data.map((publication, i) => (
        <Experience key={`publication-${i}`} {...publication} />
      ))}
    </Section>
  );
};
