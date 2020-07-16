import React from 'react';
import '../AppBody.css';
import ReactMarkdown from 'react-markdown';
export type IconType = 'LOCAL' | 'REMOTE';

export interface BodySectionProps {
   text: string;
   icon: JSX.Element;
   title: string;
}

export default function BodySection(props: BodySectionProps): JSX.Element {
   const parsedMarkdown = <ReactMarkdown source={props.text} className="body-text" />;

   return (
      <div>
         <span className="body-section-header">
            {props.icon}
            <p className="body-section-title">{props.title}</p>
         </span>
         {parsedMarkdown}
      </div>
   );
}
