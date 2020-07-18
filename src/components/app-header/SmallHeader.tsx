import React from 'react';
import { Facebook, Twitter, LinkedIn, GitHub, MusicNote, Mail } from '@material-ui/icons';

export default function SmallHeader(): JSX.Element {
   return (
      <div className="header-content">
         <span className="destination-span">
            <Facebook className="destination-icon" />
         </span>

         <span className="destination-span">
            <Twitter className="destination-icon" />
         </span>

         <span className="destination-span">
            <LinkedIn className="destination-icon" />
         </span>

         <span className="destination-span">
            <GitHub className="destination-icon" />
         </span>

         <span className="destination-span">
            <MusicNote className="destination-icon" />
         </span>

         <span className="destination-span">
            <Mail className="destination-icon" />
         </span>
      </div>
   );
}
