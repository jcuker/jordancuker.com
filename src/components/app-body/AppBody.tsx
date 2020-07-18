import React from 'react';
import './AppBody.scss';
import Card from '../card/Card';
import BodySection from './body-section/BodySection';
import { Info, Code, LibraryMusic, VideogameAsset } from '@material-ui/icons';
import { BODY_STRINGS } from '../../shared/strings';
import { useWindowSize, UseWindowSizeType } from '../../shared/hooks';

export default function AppBody(): JSX.Element {
   const width = useWindowSize(UseWindowSizeType.width);

   const imageOrText =
      width > 420 ? (
         <img src="/me.jpg" className="body-pic" alt="me" />
      ) : (
         <p className="top-card-too-small">{BODY_STRINGS.screenTooSmall}</p>
      );

   return (
      <div className="app-body">
         <Card id="top-card" className="top-card">
            <>
               <h1 className="top-card-text">{BODY_STRINGS.topSection.title}</h1>
               {imageOrText}
               <h3 className="top-card-text">{BODY_STRINGS.topSection.text}</h3>
            </>
         </Card>

         <Card id="body-card" className="body-card">
            <>
               <BodySection
                  id="about"
                  title={BODY_STRINGS.aboutSection.title}
                  text={BODY_STRINGS.aboutSection.text}
                  icon={<Info />}
               />

               <br />

               <BodySection
                  id="programming"
                  title={BODY_STRINGS.programmingSection.title}
                  text={BODY_STRINGS.programmingSection.text}
                  icon={<Code />}
               />

               <br />

               <BodySection
                  id="games"
                  title={BODY_STRINGS.gamingSection.title}
                  text={BODY_STRINGS.gamingSection.text}
                  icon={<VideogameAsset />}
               />

               <br />

               <BodySection
                  id="music"
                  title={BODY_STRINGS.musicSection.title}
                  text={BODY_STRINGS.musicSection.text}
                  icon={<LibraryMusic />}
               />
            </>
         </Card>
      </div>
   );
}
