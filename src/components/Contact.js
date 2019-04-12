import React from 'react';
import { SocialMedia } from './SocialMedia';

export class Contact extends React.Component{
    render(){
        const img = require('../images/ProfileImg.jpg');
        const ogimage = require('../images/Thumbnail_2.JPG');
        return (
            <div className="contactContent">
                <div id="navContact" className="info">
                    <div className="myInfo">
                        <h1 id="contactLoc">Contact Me</h1>
                        <div className="cardInfo">
                            <img id="cardImg" src={img} alt="" />
                            <div className="myInfoText">
                                <h4>Gabriel Jealmo</h4>
                                <h4 id="nonTagText">Phone: 072-242 83 01</h4>
                                <h4 id="nonTagText">E-mail: gabrieljealmo@gmail.com</h4>
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
                <img hidden src={ogimage} alt="" />
            </div>
        );
    }
}