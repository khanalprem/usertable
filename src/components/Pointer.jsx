// import React,{forwardRef,useRef} from 'react'
// import { gsap } from "gsap";

// const Pointer = forwardRef((props, ref) => {
//   // const el = useRef();
//   const el = useRef();
    
//   useImperativeHandle(ref, () => {           
    
//     // return our API
//     return {
//       moveTo(x, y) {
//         gsap.to(el.current, { x, y });
//       }
//     };
//   }, []);
  
//   return <div className="mousePointer" ref={el}></div>;
// });

// export default Pointer