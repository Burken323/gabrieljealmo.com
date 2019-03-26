import React from 'react';

export class Portfolio extends React.Component{


    render(){
        const one = require('../images/portfolio/WeatherApplication.JPG');
        const two = require('../images/portfolio/CurrencyConverter.JPG');
        const three = require('../images/portfolio/Tomasos_Pizza.JPG');
        const four = require('../images/portfolio/BlogApplication.JPG');
        const five = require('../images/portfolio/Designpatterns_Application.JPG');
        const six = require('../images/portfolio/BlackJack_Game.JPG');
        const seven = require('../images/portfolio/Shotgun_Game.JPG');
        const eight = require('../images/portfolio/First_Webpage.JPG');
        const nine = require('../images/portfolio/WinForms_HotelApp.JPG');
        const ten = require('../images/portfolio/WinForms_Cookbook.JPG');
        const eleven = require('../images/portfolio/BankApplication.JPG');
        const twelwe = require('../images/portfolio/TextAdventure_Game.JPG');
        const thirteen = require('../images/portfolio/SudokuSolver.JPG');
        const fourteen = require('../images/portfolio/Hangman_Game.JPG');
        return (
            <div className="portfolioContent">
                <h1 id="portfolioLoc">Portfolio</h1>
                <h4>Olika projekt gjorda i C#, Winforms, Javascript, CSS, Html, React, ASP.NET</h4>
                <div className="portfolio">
                    <div className="flexFiller">
                        <div className="portfolioImages">
                            <a target="_blank" href={one} rel="noopener noreferrer">
                                <img className="portfolioImage" src={one} alt="" />
                                <p>Väderapp som hämtar nuvarande samt en forecast på 6 dagar från API.</p>
                            </a>
                            <a target="_blank" href={two} rel="noopener noreferrer">
                                <img className="portfolioImage" src={two} alt="" />
                                <p>Valutaomvandlare som hämtar nuvarande valutor via API.</p>
                            </a>
                            <a target="_blank" href={three} rel="noopener noreferrer">
                                <img className="portfolioImage" src={three} alt="" />
                                <p>Webshop för pizzeria, gjord med ASP.NET och identity.</p>
                            </a>
                            <a target="_blank" href={four} rel="noopener noreferrer">
                                <img className="portfolioImage" src={four} alt="" />
                                <p>Blogg, utvecklad i ASP.NET med databas för posts/comments.</p>
                            </a>
                        </div>
                        <div className="portfolioImages">
                            <a target="_blank" href={five} rel="noopener noreferrer">
                                <img className="portfolioImage" src={five} alt="" />
                                <p>'Kamerasystem' utvecklat i ASP.NET med hjälp av 5 olika designpatterns.</p>
                            </a>
                            <a target="_blank" href={six} rel="noopener noreferrer">
                                <img className="portfolioImage" src={six} alt="" />
                                <p>Blackjack, utvecklat i Javascript, Html, CSS.</p>
                            </a>
                            <a target="_blank" href={seven} rel="noopener noreferrer">
                                <img className="portfolioImage" src={seven} alt="" />
                                <p>Shotgun, spel som är utvecklat i Javascript, Html och CSS.</p>
                            </a>
                            <a target="_blank" href={eight} rel="noopener noreferrer">
                                <img className="portfolioImage" src={eight} alt="" />
                                <p>Min första webbsida, enbart CSS, Html.</p>
                            </a>
                        </div>
                        <div className="portfolioImages">
                            <a target="_blank" href={nine} rel="noopener noreferrer">
                                <img className="portfolioImage" src={nine} alt="" />
                                <p>Hotelapp utvecklat i Winforms med databas.</p>
                            </a>
                            <a target="_blank" href={ten} rel="noopener noreferrer">
                                <img className="portfolioImage" src={ten} alt="" />
                                <p>Kokbok utvecklat i Winforms med databas.</p>
                            </a>
                            <a target="_blank" href={eleven} rel="noopener noreferrer">
                                <img className="portfolioImage" src={eleven} alt="" />
                                <p>Bankapplikation, utvecklad i C#.</p>
                            </a>
                            <a target="_blank" href={twelwe} rel="noopener noreferrer">
                                <img className="portfolioImage" src={twelwe} alt="" />
                                <p>Textbaserat spel, utvecklat i C#.</p>
                            </a>
                        </div>
                        <div className="portfolioImages_Last">
                            <a target="_blank" href={thirteen} rel="noopener noreferrer">
                                <img className="portfolioImage" src={thirteen} alt="" />
                                <p>Sudokulösare, utvecklat i C#.</p>
                            </a>
                            <a target="_blank" href={fourteen} rel="noopener noreferrer">
                                <img className="portfolioImage" src={fourteen} alt="" />
                                <p>Hänga gubben. Utvecklat i C#.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <h4>Github: 'https://github.com/Burken323'</h4>
            </div>
        );
    }
}