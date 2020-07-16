import React from "react";
import './AppBody.css';
import Card from "../shared/Card";
import BodySection from './BodySection/BodySection';

export default function AppBody(): JSX.Element {
    return (
        <div className='app-body' >
            <Card id='top-card' style={{ flexDirection: 'column', marginBottom: 22, justifyContent: 'space-around', alignItems: 'center' }}>
                <>
                    <h1 className='top-card-text'>Hi, my name is Jordan!</h1>
                    <img src='/me.jpg' className='body-pic'></img>
                    <h3 className='top-card-text'>Welcome to my website.</h3>
                </>
            </Card>

            <Card id='about-card'>
                <>
                    <BodySection iconName="https://picsum.photos/200" />
                </>
            </Card>
        </div>
    );
};