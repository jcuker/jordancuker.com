import React from 'react';
import './Card.css';

export interface CardProps {
   style?: any;
   id?: string;
   children?: JSX.Element;
}

export default function Card(props: CardProps): JSX.Element {
   return (
      <div className="default-card" style={{ ...props.style }} id={props.id ? props.id : undefined}>
         {props.children}
      </div>
   );
}
