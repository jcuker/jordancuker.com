import React from 'react';
import { Facebook, Twitter, LinkedIn, GitHub, MusicNote, Mail } from '@material-ui/icons';

export default function SmallHeader(): JSX.Element {
   return (
      <div className="header-content">
         <span className="destination-span">
            <a href="https://www.facebook.com/jordancuker">
               <Facebook className="destination-icon" />
            </a>
         </span>

         <span className="destination-span">
            <a href="https://twitter.com/Cukes_">
               <Twitter className="destination-icon" />
            </a>
         </span>

         <span className="destination-span">
            <a href="https://www.linkedin.com/in/jcuker/">
               <LinkedIn className="destination-icon" />
            </a>
         </span>

         <span className="destination-span">
            <a href="https://github.com/jcuker">
               <GitHub className="destination-icon" />
            </a>
         </span>

         <span className="destination-span">
            <a href="https://soundcloud.com/jordan-alexander-cuker">
               <MusicNote className="destination-icon" />
            </a>
         </span>

         <span className="destination-span">
            <a href="mailto:jordan.cuker@gmail.com">
               <Mail className="destination-icon" />
            </a>
         </span>
      </div>
   );
}
