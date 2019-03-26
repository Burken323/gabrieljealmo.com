import React from 'react';

export class SocialMedia extends React.Component{
    render(){
        const git = require('../images/GitHub.png');
        const linked = require('../images/LinkedIn.png');
        return (
            <div className="socialContent">
                <div className="socialMediaIcons">
                    <a target="_blank" href="https://github.com/Burken323" rel="noopener noreferrer">
                        <img className="socialIcon" src={git} alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/gabriel-jealmo/" rel="noopener noreferrer">
                        <img className="socialIcon" src={linked} alt="" />
                    </a>
                </div>
            </div>
        );
    }
}