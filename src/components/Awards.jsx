import { awards as data } from 'utils/data';

export const Awards = () => {
  return (
    <section>
      <h2>Awards</h2>
      <ul>
        {data.map((award, i) => (
          <Award key={`awards-${i}`} award={award} />
        ))}
      </ul>
    </section>
  );
};

export const Award = ({ award }) => {
  return <li>{award}</li>;
};
