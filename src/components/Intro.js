import React from 'react';

export class Intro extends React.Component{
    render(){
        const IntroPicture = require('../images/ProfileImg_BlackAndWhite.jpg');
        return (
            <div className="introContent">
                <img className="introPicture" src={IntroPicture} alt="" />
                <h4 id="introduction">Student in Webdevelopment .NET CMS</h4>
                <h3 id="introName">Gabriel Jealmo.</h3>
            </div>
        );
    }
}