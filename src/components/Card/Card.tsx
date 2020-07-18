import React from 'react';
import './Card.scss';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export interface CardProps {
   style?: CSSProperties;
   id?: string;
   children?: JSX.Element;
   className?: string;
}

export default function Card(props: CardProps): JSX.Element {
   return (
      <div
         className={props.className ? props.className : 'default-card'}
         style={{ ...props.style }}
         id={props.id ? props.id : undefined}
      >
         {props.children}
      </div>
   );
}
