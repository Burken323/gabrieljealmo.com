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
                                <p>Tel: 072-242 83 01</p>
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <div className="emailInfo">
                            <div className="emailInfoText">
                                <h4 id="letterText">E-mail:</h4>
                                <h4 id="letterText">gabrieljealmo@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footerContent">
                    <div className="footerInfo">
                        <h4>Made with React</h4>
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