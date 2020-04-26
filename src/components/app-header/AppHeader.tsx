import React from 'react';
import {
    FacebookFilled, TwitterSquareFilled, LinkedinFilled, GithubFilled, CustomerServiceFilled, MailFilled
} from '@ant-design/icons';
import { COLORS } from '../../colors';

export default function AppHeader(): JSX.Element {
    return (
        <div style={styles.headerMain}>
            <span style={styles.destinationSpan} >
                <FacebookFilled style={styles.destinationIcon} /><p style={styles.destinationText}>Facebook</p>
            </span>

            <span style={styles.destinationSpan} >
                <TwitterSquareFilled style={styles.destinationIcon} /><p style={styles.destinationText}>Twitter</p>
            </span>

            <span style={styles.destinationSpan} >
                <LinkedinFilled style={styles.destinationIcon} /> <p style={styles.destinationText}>LinkedIn</p>
            </span>

            <span style={styles.destinationSpan} >
                <GithubFilled style={styles.destinationIcon} /><p style={styles.destinationText}>Github</p>
            </span>

            <span style={styles.destinationSpan} >
                <CustomerServiceFilled style={styles.destinationIcon} /><p style={styles.destinationText}>Soundcloud</p>
            </span>

            <span style={styles.destinationSpan} >
                <MailFilled style={styles.destinationIcon} /><p style={styles.destinationText}>Email</p>
            </span>
        </div>
    );
};

const styles: any = {
    headerMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        background: COLORS.HEADER_BACKGROUND,
        height: '3.75%',
        width: '100%'
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