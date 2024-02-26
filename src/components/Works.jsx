import { showcase as data } from "utils/data";

export const Works = () => {
  return (
    <section>
      <h2>Selected Experiments</h2>
      <p>Some of my experiments from 2021 to 2024 which include glsl, svg, canvas, threejs and react.</p>
      <div className='experiments'>
        {data.map((exp, i) => {
          const num = i + 1 < 10 ? `0${i + 1}` : i + 1;
          return (
            <div className='experiment' key={i.toString()}>
              <Work image={exp.image} link={exp.link} name={`<em>${num}</em> ${exp.name}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Work = () => {};
