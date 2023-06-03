import React from 'react';
import './AppHeader.scss';
import { useWindowSize, UseWindowSizeType } from '../../shared/hooks';
import SmallHeader from './SmallHeader';
import Header from './Header';

export default function ResponsiveAppHeader(): JSX.Element {
   const width = useWindowSize(UseWindowSizeType.width);

   return <div className="header-main">{width <= 740 ? <SmallHeader /> : <Header />}</div>;
}
