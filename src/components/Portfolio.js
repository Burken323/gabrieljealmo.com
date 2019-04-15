import React from 'react';

export class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = { gif: "", gifInfo: "" , changePosition: false };
        this.imageView = this.imageView.bind(this);
        this.imageClose = this.imageClose.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.changePosition !== this.state.changePosition && this.state.changePosition === true){
            const portfolio = document.getElementById('backdrop');
            window.scroll(0, portfolio.offsetTop);
            let root = document.getElementById('body');
            root.classList.add('removeScrollBar');
            console.log('hej');
        }
    }

    imageView(chosenGif, info){
        this.props.open();
        this.setState({ gif: chosenGif, gifInfo: info, changePosition: true });
        // const portfolio = document.getElementById('backdrop');
        // // Internet Explorer 6-11
        // var isIE = false || !!document.documentMode;

        // // Edge 20+
        // var isEdge = !isIE && !!window.StyleMedia;
        // if(isIE || isEdge){
        //     window.scroll(0, (portfolio.offsetTop));
        // }
        // else{
        //     window.scrollTo({ top: (portfolio.offsetTop), behavior: 'smooth' });
        // }
    }

    imageClose(){
        this.props.close();
        let root = document.getElementById('body');
        root.classList.remove('removeScrollBar');
        this.setState( { changePosition: false } );
    }

    render(){
        const WeatherInfo = "WeatherApplication made with React. Fetching current weather data and a forecast for today and the next 5 days to come. Option to use Geolocation exists and gets the users current location and shows the weather for that postition.";
        const CurrencyInfo = "CurrencyConverter made with Javascript, CSS, Html. Fetches currencies from API and calculates correct conversion of two currencies.";
        const TomasosInfo = "Webshop for a pizzeria. Made in ASP.NET with database for orders, dishes etc. Uses Core Identity for configuration and using of users.";
        const BlogInfo = "Blog made with ASP.NET. Uses a database for storing, adding, removing blogposts and comments.";
        const CameraInfo = "CameraSystem made in C# with 4 designpatterns implemented. Factory, Observer, IOC and Singleton.";
        const BlackjackInfo = "Black jack game made with Javascript, CSS, Html. Has a basic login and stores previous results of the users in a database. Using node.js. (Not the database version in GIF.)";
        const ShotgunInfo = "Shotgun game. Works kindoff like Rock, paper, scissors. Made with Javascript, CSS, Html.";
        const FirstWebpageInfo = "My first webpage. Made with CSS and Html. Contains information about myself with PDF links to resume and personal letter.";
        const HotelInfo = "HotelApplication made with Winforms. Handles bookings for customers and customers. Uses a database for storage. Checks invoice and datechecks.";
        const CookBookInfo = "CookBookApplication that handles different recipes. Made with Winforms.";
        const BankInfo = "BankApplication, has a bunch of different options for customers. Console application made in C#.";
        const TextAdventureInfo = "TextAdventure game, basic console application made in C#. Contains different puzzle the user has to solve to beat the game.";
        const SudokuInfo = "SudokuSolver. Console application that solves Sudokupuzzles. Made in C#.";
        const HangmanInfo = "Hangman game, simple console application made in C#.";
        const Weather = require('../images/portfolio/WeatherApp_2.JPG');
        const Currency = require('../images/portfolio/CurrencyConverter.JPG');
        const Tomasos = require('../images/portfolio/Tomasos_Pizza.JPG');
        const Blog = require('../images/portfolio/BlogApplication.JPG');
        const Camera = require('../images/portfolio/Designpatterns_Application.JPG');
        const Blackjack = require('../images/portfolio/BlackJack_Game.JPG');
        const Shotgun = require('../images/portfolio/Shotgun_Game.JPG');
        const FirstWebpage = require('../images/portfolio/First_Webpage.JPG');
        const Hotel = require('../images/portfolio/WinForms_HotelApp.JPG');
        const Cookbook = require('../images/portfolio/WinForms_Cookbook.JPG');
        const Bank = require('../images/portfolio/BankApplication.JPG');
        const TextAdventure = require('../images/portfolio/TextAdventure_Game.JPG');
        const Sudoku = require('../images/portfolio/SudokuSolver.JPG');
        const Hangman = require('../images/portfolio/Hangman_Game.JPG');
        const WeatherGIF = require('../gifs/WeatherApp_GIFclip.gif');
        const CurrencyGIF = require('../gifs/CurrencyConverter_GIFclip.gif');
        const TomasosGIF = require('../gifs/Tomasos_GIFclip.gif');
        const BlogGIF = require('../gifs/Blog_GIFclip.gif');
        const CameraGIF = require('../gifs/CameraApp_GIFclip.gif');
        const BlackjackGIF = require('../gifs/Blackjack_GIFclip.gif');
        const ShotgunGIF = require('../gifs/Shotgun_GIFclip.gif');
        const FirstWebpageGIF = require('../gifs/FirstWebpage_GIFclip.gif');
        const HotelGIF = require('../gifs/HotelApp_GIFclip.gif');
        const CookBookGIF = require('../gifs/CookBook_GIFclip.gif');
        const BankGIF = require('../gifs/BankApp_GIFclip.gif');
        const TextAdventureGIF = require('../gifs/TextAdventure_GIFclip.gif');
        const SudokuGIF = require('../gifs/SudokuSolver_GIFclip.gif');
        const HangmanGIF = require('../gifs/Hangman_GIFclip.gif');
        return (
            <div className="portfolioContent">
                <div id="navPortfolio" className="portfolioIntroText">
                    <h1 id="portfolioLoc">Portfolio</h1>
                    <h4>Different projects made with C#, Winforms, Javascript, CSS, Html, React, ASP.NET</h4>
                </div>
                { this.props.isShowing ? <div id="backdrop" className="backdrop" onClick={this.imageClose}></div> : null }
                { this.props.isShowing ? 
                    <div className="theater">
                        { /*<div id="navTheather" className="theaterClose">
                            <span className="closeButton" onClick={this.imageClose}>x</span>
                        </div> */}
                        <div className="theaterContent">
                            <div className="centerBox">
                                <div className="box">
                                    <img id="chosenImg" src={this.state.gif} alt="" />
                                    <div className="gifInfo">
                                        <h4 className="gifText">{this.state.gifInfo}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                <div className="portfolio">
                    <div className="flexFiller">
                        <div className="portfolioImages">
                            <div id="Weather" className="portfolioTag" onClick={() => this.imageView(WeatherGIF, WeatherInfo)}>
                                <img className="portfolioImage" src={Weather} alt="" />
                                <p id="tagText">WeatherApplication.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(CurrencyGIF, CurrencyInfo)}>
                                <img className="portfolioImage" src={Currency} alt="" />
                                <p id="tagText">CurrencyConverter.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(TomasosGIF, TomasosInfo)}>
                                <img className="portfolioImage" src={Tomasos} alt="" />
                                <p id="tagText">Pizzeria webshop.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(BlogGIF, BlogInfo)}>
                                <img className="portfolioImage" src={Blog} alt="" />
                                <p id="tagText">Blog.</p>
                            </div>
                        </div>
                        <div className="portfolioImages">
                            <div className="portfolioTag" onClick={() => this.imageView(CameraGIF, CameraInfo)}>
                                <img className="portfolioImage" src={Camera} alt="" />
                                <p id="tagText">"Camerasystem".</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(BlackjackGIF, BlackjackInfo)}>
                                <img className="portfolioImage" src={Blackjack} alt="" />
                                <p id="tagText">Blackjack.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(ShotgunGIF, ShotgunInfo)}>
                                <img className="portfolioImage" src={Shotgun} alt="" />
                                <p id="tagText">Shotgun game.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(FirstWebpageGIF, FirstWebpageInfo)}>
                                <img className="portfolioImage" src={FirstWebpage} alt="" />
                                <p id="tagText">My first webpage.</p>
                            </div>
                        </div>
                        <div className="portfolioImages">
                            <div className="portfolioTag" onClick={() => this.imageView(HotelGIF, HotelInfo)}>
                                <img className="portfolioImage" src={Hotel} alt="" />
                                <p id="tagText">HotelApplication.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(CookBookGIF, CookBookInfo)}>
                                <img className="portfolioImage" src={Cookbook} alt="" />
                                <p id="tagText">CookBook.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(BankGIF, BankInfo)}>
                                <img className="portfolioImage" src={Bank} alt="" />
                                <p id="tagText">Bankapplication.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(TextAdventureGIF, TextAdventureInfo)}>
                                <img className="portfolioImage" src={TextAdventure} alt="" />
                                <p id="tagText">Textbased game.</p>
                            </div>
                        </div>
                        <div className="portfolioImages_Last">
                            <div className="portfolioTag" onClick={() => this.imageView(SudokuGIF, SudokuInfo)}>
                                <img className="portfolioImage" src={Sudoku} alt="" />
                                <p id="tagText">SudokuSolver.</p>
                            </div>
                            <div className="portfolioTag" onClick={() => this.imageView(HangmanGIF, HangmanInfo)}>
                                <img className="portfolioImage" src={Hangman} alt="" />
                                <p id="tagText">Hangman.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}