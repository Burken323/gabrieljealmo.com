import React from 'react';

export class About extends React.Component{
    render(){
        const cv = require('../cv/CV_Gabriel_Jealmo.pdf');
        return (
            <div className="aboutContent">
                <div className="content">
                    <div className="about">
                        <div id="navAbout" className="aboutMe">
                            <div className="aboutMeText">
                                <h1 id="aboutLoc">About Me</h1>
                                <p id="nonTagText"> 
                                    My name is Gabriel Jealmo and I'm currently studying webdevelopment with a focus on .NET CMS
                                    at Nackademin. What I find most appealing about programming is the possibility that as a programmer
                                    you can always learn more and improve in so many different ways AND the problem solving never stops.
                                    There's always something that can be done differently or better.
                                </p>
                            </div>
                        </div>
                        <div className="downloadCV">
                            <a id="downloadTag" href={cv} target="_blank" rel="noopener noreferrer">
                                <h2>My Resume</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}