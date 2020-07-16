import React from 'react';
import {
    FacebookFilled, TwitterSquareFilled, LinkedinFilled, GithubFilled, CustomerServiceFilled, MailFilled
} from '@ant-design/icons';
import { COLORS } from '../../colors';
import './AppHeader.css';

export default function AppHeader(): JSX.Element {
    return (
        <div className='header-main'>
            <div className='header-content'>
                <span className='destination-span' >
                    <FacebookFilled style={styles.destinationIcon} /><p className='destination-text'>Facebook</p>
                </span>

                <span className='destination-span' >
                    <TwitterSquareFilled style={styles.destinationIcon} /><p className='destination-text'>Twitter</p>
                </span>

                <span className='destination-span' >
                    <LinkedinFilled style={styles.destinationIcon} /> <p className='destination-text'>LinkedIn</p>
                </span>

                <span className='destination-span' >
                    <GithubFilled style={styles.destinationIcon} /><p className='destination-text'>Github</p>
                </span>

                <span className='destination-span' >
                    <CustomerServiceFilled style={styles.destinationIcon} /><p className='destination-text'>Soundcloud</p>
                </span>

                <span className='destination-span' >
                    <MailFilled style={styles.destinationIcon} /><p className='destination-text'>Email</p>
                </span>
            </div>
        </div>
    );
};

const styles: any = {
    headerMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        background: COLORS.HEADER_BACKGROUND,
        height: '5%',
        width: '100%',
    },
    headerContent: {

    },
    destinationSpan: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    destinationIcon: {
        marginRight: 5,
        color: COLORS.ACCENT_GREY
    },
    destinationText: {
        color: COLORS.ACCENT_GREY,
        margin: 0
    }
}