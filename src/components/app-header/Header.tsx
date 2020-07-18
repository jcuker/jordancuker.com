import React from 'react';
import { Facebook, Twitter, LinkedIn, GitHub, MusicNote, Mail } from '@material-ui/icons';

export default function NormalHeader(): JSX.Element {
   return (
      <div className="header-content">
         <span className="destination-span">
            <a href="https://www.facebook.com/jordancuker">
               <Facebook className="destination-icon" />
               <p className="destination-text">Facebook</p>
            </a>
         </span>

         <span className="destination-span">
            <a href="https://twitter.com/Cukes_">
               <Twitter className="destination-icon" />
               <p className="destination-text">Twitter</p>
            </a>
         </span>

         <span className="destination-span">
            <a href="https://www.linkedin.com/in/jcuker/">
               <LinkedIn className="destination-icon" />
               <p className="destination-text">LinkedIn</p>
            </a>
         </span>

         <span className="destination-span">
            <a href="https://github.com/jcuker">
               <GitHub className="destination-icon" />
               <p className="destination-text">Github</p>
            </a>
         </span>

         <span className="destination-span">
            <a href="https://soundcloud.com/jordan-alexander-cuker">
               <MusicNote className="destination-icon" />
               <p className="destination-text">Soundcloud</p>
            </a>
         </span>

         <span className="destination-span">
            <a href="mailto:jordan.cuker@gmail.com">
               <Mail className="destination-icon" />
               <p className="destination-text">Email</p>
            </a>
         </span>
      </div>
   );
}
