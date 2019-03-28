import React from 'react';

export class About extends React.Component{
    render(){
        return (
            <div className="aboutContent">
                <h1 id="aboutLoc">Om Mig</h1>
                <div className="content">
                    <div className="about">
                        <div className="aboutMe">
                            <div className="aboutMeText">
                                <h2>Hej!</h2>
                                <p id="tagText">
                                    Mitt namn är Gabriel Jealmo och jag studerar just nu för att bli Webbutvecklare med fokus på
                                    .NET CMS.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}