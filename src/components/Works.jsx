import { showcase as data } from "utils/data";

export const Works = () => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <div className='experiments'>
        {data.data.map((exp, i) => {
          const num = i + 1 < 10 ? `0${i + 1}` : i + 1;
          return (
            <div className='experiment' key={`experiment-${i}`}>
              <Work name={`<em>${num}</em> ${exp.name}`} {...exp} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Work = () => {};
