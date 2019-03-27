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
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                    in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}