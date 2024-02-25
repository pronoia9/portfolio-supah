export const Works = () => {
  return <div>Works</div>;
};

export const Work = () => {
  return <div>Work</div>;
};

// import { useRef } from 'react';
// import gsap from 'gsap';
// import HTMLParse from 'react-html-parser';

// const Work = ({ link, name, image }) => {
//   const $root = useRef();
//   const $overlay = useRef();
//   const $link = useRef();

//   const handleMouseEnter = (e) => {
//     const bounds = $root.current.getBoundingClientRect();
//     const top = e.clientY < bounds.y + bounds.height / 2;

//     gsap.to($link.current, {
//       x: '2rem',
//       duration: 0.5,
//       ease: 'power3.out',
//     });
//     gsap.fromTo(
//       $overlay.current,
//       {
//         scaleY: 0,
//         transformOrigin: top ? '0 0' : '0 100%',
//       },
//       {
//         scale: 1,
//         duration: 0.5,
//         ease: 'power3.out',
//       }
//     );
//   };

//   const handleMouseLeave = (e) => {
//     const bounds = $root.current.getBoundingClientRect();
//     const top = e.clientY < bounds.y + bounds.height / 2;

//     gsap.killTweensOf([$overlay.current, $link.current]);
//     gsap.to($link.current, {
//       x: 0,
//       duration: 0.3,
//       ease: 'power3.out',
//     });
//     gsap.to($overlay.current, {
//       scaleY: 0,
//       transformOrigin: top ? '0 0' : '0 100%',
//       duration: 0.7,
//       ease: 'power3.out',
//     });
//   };

//   return (
//     <a ref={$root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link} target='_blank'>
//       {image && <img src={image} alt={name} />}
//       <span className='link' ref={$link}>
//         {HTMLParse(name)}
//       </span>
//       <span className='overlay' ref={$overlay}></span>
//     </a>
//   );
// };

// export default Work;
