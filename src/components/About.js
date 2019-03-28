import React from 'react';

export class About extends React.Component{
    render(){
        const cv = require('../cv/CV_Gabriel_Jealmo.pdf');
        return (
            <div className="aboutContent">
                <h1 id="aboutLoc">Om Mig</h1>
                <div className="content">
                    <div className="about">
                        <div className="aboutMe">
                            <div className="aboutMeText">
                                <h2>Hej!</h2>
                                <p id="tagText">
                                    Mitt namn är Gabriel Jealmo och jag studerar just nu på Nackademin för att bli Webbutvecklare 
                                    med fokus på .NET CMS.  
                                </p>
                            </div>
                        </div>
                        <div className="downloadCV">
                                <a href={cv} target="_blank" rel="noopener noreferrer">
                                    <h2>CV</h2>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}