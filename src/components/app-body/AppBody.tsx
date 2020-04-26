import React from "react";
import { Card } from "antd";
import { COLORS } from "../../colors";

export default function AppBody(): JSX.Element {
    return (
        <div style={styles.appBody} >
            <Card bordered={false} style={styles.bodyCard}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
};

const styles: any = {
    appBody: {
        alignSelf: 'center',
        margin: 15
    },
    bodyCard: {
        width: 300,
        background: COLORS.CARD_BACKGROUND,
        borderRadius: 6
    }
}