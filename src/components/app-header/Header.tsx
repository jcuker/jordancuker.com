import React from 'react';
import { Facebook, Twitter, LinkedIn, GitHub, MusicNote, Mail } from '@material-ui/icons';

export default function NormalHeader(): JSX.Element {
   return (
      <div className="header-content">
         <span className="destination-span">
            <Facebook className="destination-icon" />
            <p className="destination-text">Facebook</p>
         </span>

         <span className="destination-span">
            <Twitter className="destination-icon" />
            <p className="destination-text">Twitter</p>
         </span>

         <span className="destination-span">
            <LinkedIn className="destination-icon" />
            <p className="destination-text">LinkedIn</p>
         </span>

         <span className="destination-span">
            <GitHub className="destination-icon" />
            <p className="destination-text">Github</p>
         </span>

         <span className="destination-span">
            <MusicNote className="destination-icon" />
            <p className="destination-text">Soundcloud</p>
         </span>

         <span className="destination-span">
            <Mail className="destination-icon" />
            <p className="destination-text">Email</p>
         </span>
      </div>
   );
}
