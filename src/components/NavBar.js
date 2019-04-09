import React from 'react';

export class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { position: 0, currentPos: 0 };
        window.addEventListener('scroll', this.onScroll);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleAboutClick = this.handleAboutClick.bind(this);
        this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
    } 

    onScroll = (event) => {
        let nav = document.getElementById('NavBar');
        let sticky = nav.offsetTop;
        if(this.state.position === 0){
            this.setState({ position: sticky });
        }
        this.setState({ currentPos: sticky });
        if (window.pageYOffset >= this.state.position) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }

    handleLogoClick(e){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleAboutClick(e){
        const about = document.getElementById('aboutLoc');
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

    handlePortfolioClick(e){
        const portfolio = document.getElementById('portfolioLoc');
        // Internet Explorer 6-11
        var isIE = false || !!document.documentMode;

        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        if(isIE || isEdge){
            window.scroll(0, (portfolio.offsetTop - 110));
        }
        else{
            window.scrollTo({ top: (portfolio.offsetTop - 110), behavior: 'smooth' });
        }
    }

    handleContactClick(e){
        const contact = document.getElementById('contactLoc');
        // Internet Explorer 6-11
        var isIE = false || !!document.documentMode;

        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        if(isIE || isEdge){
            window.scroll(0, (contact.offsetTop - 80));
        }
        else{
            window.scrollTo({ top: (contact.offsetTop - 80), behavior: 'smooth' });
        }
    }

    render(){
        const LogoImg = require('../images/Logo_Black.png');
        return (
            <div id="NavBar" className="navigation">
                <img onClick={this.handleLogoClick} className="logoImg" src={LogoImg} alt="" />
                <div className="pageNavigation">
                    <h4 onClick={this.handleAboutClick} id="about">About Me</h4>
                    <h4 onClick={this.handlePortfolioClick} id="portfolio">Portfolio</h4>
                    <h4 onClick={this.handleContactClick} id="contact">Contact Me</h4>
                </div>
            </div>
        );
    }
}