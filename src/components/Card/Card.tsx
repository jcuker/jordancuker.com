import './Card.scss';
import React, { CSSProperties } from 'react';

export interface CardProps {
   style?: CSSProperties;
   id?: string;
   children?: JSX.Element;
   className?: string;
}

export default function Card(props: CardProps): JSX.Element {
   return (
      <div className={props.className ? props.className : 'default-card'} style={{ ...props.style }} id={props.id}>
         {props.children}
      </div>
   );
}
