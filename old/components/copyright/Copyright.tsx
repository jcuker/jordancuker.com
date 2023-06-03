import React from 'react';
import './copyright.scss';

export default function Copyright(): JSX.Element {
   function getYear() {
      const date = new Date();
      return date.getFullYear();
   }

   return <div className="copyright">© {getYear()} Jordan Cuker</div>;
}
