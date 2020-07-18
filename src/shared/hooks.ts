import { useState, useLayoutEffect } from 'react';

export enum UseWindowSizeType {
   height,
   width,
   both,
}

export function useWindowSize(e: UseWindowSizeType = UseWindowSizeType.both): number | number[] {
   const [size, setSize] = useState([0, 0]);

   useLayoutEffect(() => {
      function updateSize() {
         setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
   }, []);

   switch (e) {
      case UseWindowSizeType.height:
         return size[1];
      case UseWindowSizeType.width:
         return size[0];
      default:
         return size;
   }
}
