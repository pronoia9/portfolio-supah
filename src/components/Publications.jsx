export const Publications = () => {
  return (
    <section>
      <h2>Publications</h2>
      <div className='cv-work'>
        <div className='years'>Awwwards Course - feb 2021</div>
        <h3>
          <a href='https://www.awwwards.com/academy/course/impress-everyone-with-a-3d-particle-scene-starting-from-bad-models' target='_blank'>
            Impress everyone with a 3D particle scene with Blender and Three.js
          </a>
        </h3>
      </div>
      <div className='cv-work'>
        <div className='years'>Codrops Tutorial - apr 2023</div>
        <h3>
          <a href='https://tympanus.net/codrops/2023/04/27/building-a-webgl-carousel-with-react-three-fiber-and-gsap/' target='_blank'>
            Building a WebGL Carousel with React Three Fiber and GSAP
          </a>
        </h3>
      </div>
    </section>
  );
};

export const Publication = () => {
  return <div>Publication</div>;
};
