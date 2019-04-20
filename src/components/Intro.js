import React from 'react';

export class Intro extends React.Component{
    constructor(props){
        super(props);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handleArrowClick(e){
        const about = document.getElementById('navAbout');
        // Internet Explorer 6-11
        var isIE = false || !!document.documentMode;

        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        if(isIE || isEdge){
            window.scroll(0, (about.offsetTop - 120));
        }
        else{
            window.scrollTo({ top: (about.offsetTop - 120), behavior: 'smooth' });
        }
    }

    render(){
        const testIntroPic = require('../images/IntroPic_3dText_2.png');
        const testIntroTextPic = require('../images/IntroDesc_3dText_2.png');
        return (
            <div className="introContent">
                <link rel="prefetch" src={testIntroPic} />
                <link rel="prefetch" src={testIntroTextPic} />
                <div className="introPictureContainer">
                    <img className="introPicture" src={testIntroPic} alt="" />
                </div>
                <div className="introTextPictureContainer">
                    <img className="introTextPicture" src={testIntroTextPic} alt="" />
                </div>
                <div className="directions">
                    <div className="firstMark"></div>
                    <div className="secondMark"></div>
                    <div className="triangleDown" onClick={this.handleArrowClick}></div>
                </div>
            </div>
        );
    }
}