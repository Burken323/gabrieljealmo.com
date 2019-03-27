import React from 'react';
import { SocialMedia } from './SocialMedia';

export class Contact extends React.Component{
    render(){
        const img = require('../images/ProfileImg.jpg');
        return (
            <div className="contactContent">
                <h1 id="contactLoc">Kontakta Mig</h1>
                <div className="info">
                    <div className="myInfo">
                        <div className="cardInfo">
                            <img id="cardImg" src={img} alt="" />
                            <div className="myInfoText">
                                <h3>Gabriel Jealmo</h3>
                                <p id="tagText">Tel: 072-242 83 01</p>
                                <p id="tagText">E-mail: gabrieljealmo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footerContent">
                    <div className="footerInfo">
                        <div className="social">
                            <SocialMedia />
                        </div>
                        <h4>&copy; Gabriel Jealmo</h4>
                    </div>
                </footer>
            </div>
        );
    }
}