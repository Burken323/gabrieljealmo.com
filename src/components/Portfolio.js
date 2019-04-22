import React from 'react';
import { PortfolioProjects } from '../PortfolioModule';
const WeatherGIF = require('../gifs/WeatherApp_GIFclip.gif');
const CurrencyGIF = require('../gifs/CurrencyConverter_GIFclip.gif');
let reactGifs = [WeatherGIF, CurrencyGIF];

const TomasosGIF = require('../gifs/Tomasos_GIFclip.gif');
const BlogGIF = require('../gifs/Blog_GIFclip.gif');
let aspGifs = [TomasosGIF, BlogGIF];

const BlackjackGIF = require('../gifs/Blackjack_GIFclip.gif');
const ShotgunGIF = require('../gifs/Shotgun_GIFclip.gif');
const FirstWebpageGIF = require('../gifs/FirstWebpage_GIFclip.gif');
let jsHtmlCssGifs = [BlackjackGIF, ShotgunGIF, FirstWebpageGIF];

const CameraGIF = require('../gifs/CameraApp_GIFclip.gif');
const HotelGIF = require('../gifs/HotelApp_GIFclip.gif');
const CookBookGIF = require('../gifs/CookBook_GIFclip.gif');
const BankGIF = require('../gifs/BankApp_GIFclip.gif');
const TextAdventureGIF = require('../gifs/TextAdventure_GIFclip.gif');
const SudokuGIF = require('../gifs/SudokuSolver_GIFclip.gif');
const HangmanGIF = require('../gifs/Hangman_GIFclip.gif');
let csharpGifs = [CameraGIF, HotelGIF, CookBookGIF, BankGIF, TextAdventureGIF, SudokuGIF, HangmanGIF];

let allGifs = [reactGifs, aspGifs, jsHtmlCssGifs, csharpGifs];

const reactLogo = require('../images/portfolio/SlideshowCategories/ReactIntro_SmallImg.png');
const aspNetLogo = require('../images/portfolio/SlideshowCategories/ASPNET_logo.png');
const jsHtmlCssLogo = require('../images/portfolio/SlideshowCategories/JSHTMLCSS_logo.png');
const csharpLogo = require('../images/portfolio/SlideshowCategories/Csharp_logo.png');

export class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            gif: "", 
            gifInfo: "" , 
            changePosition: false, 
            currentCategoryTexts: [],
            currentCategoryPictures: [],
            slideshowPortfolioIndex: 0,
            slideshowCategory: 0,
            portfolio: [],
            loaded: false
        };
        this.imageView = this.imageView.bind(this);
        this.imageClose = this.imageClose.bind(this);
    }

    componentDidMount(){
        let myPortfolio = PortfolioProjects;
        let startUpContent = PortfolioProjects[0];
        let startProject = startUpContent[0];
        let startPicture = startUpContent[1];
        this.setState({ 
            currentCategoryTexts: startProject, 
            currentCategoryPictures: startPicture,
            portfolio: myPortfolio
        });
    }

    componentDidUpdate(prevProps, prevState){
        var portfolioImg = document.getElementById('img-div');
        var curPicture = document.getElementById('selectedImg');
        if(prevState.changePosition !== this.state.changePosition && this.state.changePosition === true){
            const portfolio = document.getElementById('backdrop');
            window.scroll(0, portfolio.offsetTop);
            let root = document.getElementById('body');
            root.classList.add('removeScrollBar');
            var portfolioGif = document.getElementById('theater');
            portfolioGif.classList.remove('renderGif');
            void portfolioGif.offsetWidth;
            portfolioGif.classList.add('renderGif');
        }
        if(prevState.slideshowPortfolioIndex !== this.state.slideshowPortfolioIndex){
            portfolioImg.classList.remove('reRenderPos');
            portfolioImg.classList.remove('reRenderNeg');
            curPicture.classList.remove('renderNewImg');
            console.log('Render new portfolio');
            void portfolioImg.offsetWidth;
            if(!((prevState.slideshowPortfolioIndex > this.state.slideshowPortfolioIndex 
                && prevState.slideshowCategory === this.state.slideshowCategory)
                || (prevState.slideshowCategory > this.state.slideshowCategory))){
                portfolioImg.classList.add('reRenderNeg');
            }
            else{
                portfolioImg.classList.add('reRenderPos');
            }
            curPicture.classList.add('renderNewImg');
        }
        else if(prevState.slideshowCategory !== this.state.slideshowCategory){
            portfolioImg.classList.remove('reRenderPos');
            portfolioImg.classList.remove('reRenderNeg');
            curPicture.classList.remove('renderNewImg');
            console.log('Render new category');
            void portfolioImg.offsetWidth;
            if(prevState.slideshowCategory < this.state.slideshowCategory){
                portfolioImg.classList.add('reRenderNeg');
            }
            else{
                portfolioImg.classList.add('reRenderPos');
            }
            curPicture.classList.add('renderNewImg');
        }
    }

    nextProject(direction){
        let allProjects = this.state.portfolio;
        let currentProjects = this.state.currentCategoryPictures;
        let currentTexts = this.state.currentCategoryTexts;
        let index = this.state.slideshowPortfolioIndex;
        let catIndex = this.state.slideshowCategory;
        if(direction < 0){
            if((index + direction) < 0 && catIndex === 0){
                catIndex = allProjects.length - 1;
                this.changeSelectedCategory(catIndex, -1);
                let temp = allProjects[catIndex];
                currentTexts = temp[0];
                currentProjects = temp[1];
                index = currentProjects.length - 1;
            }
            else if((index + direction) < 0 && catIndex > 0){
                catIndex -= 1;
                this.changeSelectedCategory(catIndex, -1);
                let temp = allProjects[catIndex];
                currentTexts = temp[0];
                currentProjects = temp[1];
                index = currentProjects.length - 1;
            }
            else{
                index += direction;
            }
        }
        else{
            if((index + direction) === currentProjects.length && (catIndex + 1) === allProjects.length){
                index = 0;
                catIndex = 0;
                this.changeSelectedCategory(catIndex, 1);
                let temp = allProjects[catIndex];
                currentTexts = temp[0];
                currentProjects = temp[1];
            }
            else if((index + direction) === currentProjects.length && catIndex < allProjects.length){
                index = 0;
                catIndex += 1;
                this.changeSelectedCategory(catIndex, 1);
                let temp = allProjects[catIndex];
                currentTexts = temp[0];
                currentProjects = temp[1];
            }
            else{
                index += direction;
            }
        }
        this.setState({ slideshowPortfolioIndex: index, currentCategoryPictures: currentProjects, slideshowCategory: catIndex, currentCategoryTexts: currentTexts });
    }

    changeSelectedCategory(index, direction){
        var chosen;
        var previous;
        if(direction < 0){
            switch(index){
                case 0:
                    chosen = document.getElementById('0');
                    previous = document.getElementById('1');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                case 1:
                    chosen = document.getElementById('1');
                    previous = document.getElementById('2');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                case 2:
                    chosen = document.getElementById('2');
                    previous = document.getElementById('3');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                case 3:
                    chosen = document.getElementById('3');
                    previous = document.getElementById('0');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                default:
                    break;
            }
        }
        else{
            switch(index){
                case 0:
                    chosen = document.getElementById('0');
                    previous = document.getElementById('3');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                case 1:
                    chosen = document.getElementById('1');
                    previous = document.getElementById('0');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                case 2:
                    chosen = document.getElementById('2');
                    previous = document.getElementById('1');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                case 3:
                    chosen = document.getElementById('3');
                    previous = document.getElementById('2');
                    previous.classList.remove('selected');
                    chosen.classList.add('selected');
                    break;
                default:
                    break;
            }
        }
    }

    categoryClick(choice){
        let selected = this.state.portfolio[choice];
        let selectedTexts = selected[0];
        let selectedPictures = selected[1];
        var allCategories = document.getElementsByClassName('code_logo');
        for(var i = 0; i < allCategories.length; i++){
            allCategories[i].classList.remove('selected');
        }
        var chosen;
        switch(choice){
            case 0:
                chosen = document.getElementById('0');
                chosen.classList.add('selected');
                break;
            case 1:
                chosen = document.getElementById('1');
                chosen.classList.add('selected');
                break;
            case 2:
                chosen = document.getElementById('2');
                chosen.classList.add('selected');
                break;
            case 3:
                chosen = document.getElementById('3');
                chosen.classList.add('selected');
                break;
            default:
                break;
        }
        this.setState({ currentCategoryTexts: selectedTexts, currentCategoryPictures: selectedPictures, slideshowCategory: choice, slideshowPortfolioIndex: 0 });
    }

    imageView(){
        let index = this.state.slideshowPortfolioIndex;
        let category = this.state.slideshowCategory;
        let projects = allGifs[category];
        let chosenGif = projects[index];
        this.props.open();
        this.setState({ gif: chosenGif, changePosition: true });
    }

    imageClose(){
        this.props.close();
        let root = document.getElementById('body');
        root.classList.remove('removeScrollBar');
        this.setState( { changePosition: false } );
    }

    onLoad(){
        this.setState({ loaded: !this.state.loaded });
    }

    render(){
        let currentPictures = this.state.currentCategoryPictures;
        let currentTexts = this.state.currentCategoryTexts;
        let index = this.state.slideshowPortfolioIndex;
        let picture = currentPictures[index];
        let preFetchPictures = this.state.portfolio.map(function(category){
            let links = category[1].map(function(picture){
                return (
                    <link key={picture} rel="prefetch" href={picture} />
                );
            });
            return links;
        });
        let preFetchGifs = allGifs.map(function(gifs){
            let links = gifs.map(function(gif){
                return(
                    <link key={gif} rel="prefetch" href={gif} />
                );
            });
            return links;
        });
        return (
            <div className="portfolioContent">
                {preFetchPictures}
                {preFetchGifs}
                <div id="navPortfolio" className="portfolioIntroText">
                    <h1 id="portfolioLoc">Portfolio</h1>
                    <h4>Different projects made with C#, Winforms, Javascript, CSS, Html, React, ASP.NET</h4>
                </div>
                { this.props.isShowing ? <div id="backdrop" className="backdrop" onClick={this.imageClose}></div> : null }
                { this.props.isShowing ? 
                    <div id="theater" className="theater">
                        <div className="theaterContent">
                            <div className="centerBox">
                                <div className="box">
                                    <img id="chosenImg" src={this.state.gif} onLoad={this.onLoad.bind(this)} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                <div className="portfolio">
                    <div className="flexFiller">
                        <div className="code_logos">
                            <div id="0" className="code_logo selected" onClick={() => this.categoryClick(0)}>
                                <img className="logo" src={reactLogo} alt="" />
                            </div>
                            <div id="1" className="code_logo" onClick={() => this.categoryClick(1)}>
                                <img className="logo" src={aspNetLogo} alt="" />
                            </div>
                            <div id="2" className="code_logo" onClick={() => this.categoryClick(2)}>
                                <img className="logo" src={jsHtmlCssLogo} alt="" />
                            </div>
                            <div id="3" className="code_logo" onClick={() => this.categoryClick(3)}>
                                <img className="logo" src={csharpLogo} alt="" />
                            </div>
                        </div>
                        <div className="portfolio_previewSlideShow">
                            <div className="portfolio_slideShowContent">
                                <div className="left" onClick={() => this.nextProject(-1)}>
                                    <div className="left_arrow"></div>
                                </div>
                                <div className="slideshow">
                                    <div className="slideshow_content">
                                        <div id="img-div" className="portfolio_image reRender" onClick={() => this.imageView()}>
                                            <img id="selectedImg" className="current_img renderNewImg" src={picture} onLoad={this.onLoad.bind(this)} alt="" />
                                        </div>
                                        <div className="portfolio_text">
                                            <h4 id="selectedText">{currentTexts[index]}</h4>
                                        </div>
                                    </div>
                                    <p>Click on image for demo.</p>
                                </div>
                                <div className="right" onClick={() => this.nextProject(1)}>
                                    <div className="right_arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}