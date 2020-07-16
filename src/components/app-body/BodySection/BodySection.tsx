import React from 'react';
import '../../../index.css';

export type IconType = 'LOCAL' | 'REMOTE';

export interface BodySectionProps {
    iconName: string;
    iconType?: IconType;
}

export default function BodySection(props: BodySectionProps): JSX.Element {
    function getImage() {
        if (props.iconType && props.iconType === 'LOCAL') {
            return <></>
        } else {
            return <img src={props.iconName} />
        }
    }

    const image = getImage();

    return (
        <div>
            <span>{image}<p className='body-text'>fdas</p></span>

        </div>
    )
};
