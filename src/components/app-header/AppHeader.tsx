import React from 'react';
import { COLORS } from '../../colors';
import './AppHeader.css';
import { Facebook, Twitter, LinkedIn, GitHub, MusicNote, Mail } from '@material-ui/icons';

export default function AppHeader(): JSX.Element {
   return (
      <div className="header-main">
         <div className="header-content">
            <span className="destination-span">
               <Facebook style={styles.destinationIcon} />
               <p className="destination-text">Facebook</p>
            </span>

            <span className="destination-span">
               <Twitter style={styles.destinationIcon} />
               <p className="destination-text">Twitter</p>
            </span>

            <span className="destination-span">
               <LinkedIn style={styles.destinationIcon} /> <p className="destination-text">LinkedIn</p>
            </span>

            <span className="destination-span">
               <GitHub style={styles.destinationIcon} />
               <p className="destination-text">Github</p>
            </span>

            <span className="destination-span">
               <MusicNote style={styles.destinationIcon} />
               <p className="destination-text">Soundcloud</p>
            </span>

            <span className="destination-span">
               <Mail style={styles.destinationIcon} />
               <p className="destination-text">Email</p>
            </span>
         </div>
      </div>
   );
}

const styles: any = {
   headerMain: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      background: COLORS.HEADER_BACKGROUND,
      height: '5%',
      width: '100%',
   },
   headerContent: {},
   destinationSpan: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
   },
   destinationIcon: {
      marginRight: 5,
      color: COLORS.ACCENT_GREY,
   },
   destinationText: {
      color: COLORS.ACCENT_GREY,
      margin: 0,
   },
};
