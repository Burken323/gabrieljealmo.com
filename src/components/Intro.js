import React from 'react';

export class Intro extends React.Component{
    render(){
        const IntroPicture = require('../images/ProfileImg_BlackAndWhite.jpg');
        return (
            <div className="introContent">
                <div className="introPictureContainer">
                    <img className="introPicture" src={IntroPicture} alt="" />
                </div>
                <div className="introTitle">
                    <h4 id="introduction">Student in Webdevelopment .NET CMS</h4>
                </div>
                <div className="introMyName">
                    <h3 id="introName">Gabriel Jealmo.</h3>
                </div>
                <div className="directions">
                    <div className="firstMark"></div>
                    <div className="secondMark"></div>
                    <div className="triangleDown"></div>
                </div>
            </div>
        );
    }
}