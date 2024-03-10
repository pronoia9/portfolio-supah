import { Experience } from '/src/components';
import { publications as data } from '/src/assets/data';

export const Publications = () => {
  return (
    <section>
      <h2>Publications</h2>
      {data.map((publication, i) => (
        <Experience key={`publication-${i}`} {...publication} />
      ))}
    </section>
  );
};
