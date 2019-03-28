import React from 'react';

export class Portfolio extends React.Component{


    render(){
        const one = require('../images/portfolio/WeatherApp_2.JPG');
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
                <h4>Different projects made with C#, Winforms, Javascript, CSS, Html, React, ASP.NET</h4>
                <div className="portfolio">
                    <div className="flexFiller">
                        <div className="portfolioImages">
                            <a className="portfolioTag" target="_blank" href={one} rel="noopener noreferrer">
                                <img className="portfolioImage" src={one} alt="" />
                                <p id="tagText">WeatherApp that fetches current and a forecast for the next 6 days from API.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={two} rel="noopener noreferrer">
                                <img className="portfolioImage" src={two} alt="" />
                                <p id="tagText">CurrencyConverter that fetches currencies from API.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={three} rel="noopener noreferrer">
                                <img className="portfolioImage" src={three} alt="" />
                                <p id="tagText">Webshop for a pizzeria, made with ASP.NET and core identity.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={four} rel="noopener noreferrer">
                                <img className="portfolioImage" src={four} alt="" />
                                <p id="tagText">Blog, developed in ASP.NET with database for posts/comments.</p>
                            </a>
                        </div>
                        <div className="portfolioImages">
                            <a className="portfolioTag" target="_blank" href={five} rel="noopener noreferrer">
                                <img className="portfolioImage" src={five} alt="" />
                                <p id="tagText">'Camerasystem' developed in ASP.NET with 5 different designpatterns implemented.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={six} rel="noopener noreferrer">
                                <img className="portfolioImage" src={six} alt="" />
                                <p id="tagText">Blackjack, developed with Javascript, Html, CSS.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={seven} rel="noopener noreferrer">
                                <img className="portfolioImage" src={seven} alt="" />
                                <p id="tagText">Shotgun, simple game developed with Javascript, Html och CSS.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={eight} rel="noopener noreferrer">
                                <img className="portfolioImage" src={eight} alt="" />
                                <p id="tagText">My first webpage, made with CSS, Html.</p>
                            </a>
                        </div>
                        <div className="portfolioImages">
                            <a className="portfolioTag" target="_blank" href={nine} rel="noopener noreferrer">
                                <img className="portfolioImage" src={nine} alt="" />
                                <p id="tagText">Hotelapp developed in Winforms with database.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={ten} rel="noopener noreferrer">
                                <img className="portfolioImage" src={ten} alt="" />
                                <p id="tagText">CookBook developed in Winforms with database.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={eleven} rel="noopener noreferrer">
                                <img className="portfolioImage" src={eleven} alt="" />
                                <p id="tagText">Bankapplication, developed in C#.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={twelwe} rel="noopener noreferrer">
                                <img className="portfolioImage" src={twelwe} alt="" />
                                <p id="tagText">Textbased game, developed in C#.</p>
                            </a>
                        </div>
                        <div className="portfolioImages_Last">
                            <a className="portfolioTag" target="_blank" href={thirteen} rel="noopener noreferrer">
                                <img className="portfolioImage" src={thirteen} alt="" />
                                <p id="tagText">SudokuSolver, developed in C#.</p>
                            </a>
                            <a className="portfolioTag" target="_blank" href={fourteen} rel="noopener noreferrer">
                                <img className="portfolioImage" src={fourteen} alt="" />
                                <p id="tagText">Hangman. developed in C#.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <h4>Github: 'https://github.com/Burken323'</h4>
            </div>
        );
    }
}