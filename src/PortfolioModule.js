const Weather = require('./images/portfolio/WeatherApp_2.png');
const Currency = require('./images/portfolio/CurrencyConverter.JPG');
const Tomasos = require('./images/portfolio/Tomasos_Pizza.png');
const Blog = require('./images/portfolio/BlogApplication.png');
const Camera = require('./images/portfolio/Designpatterns_Application.png');
const Blackjack = require('./images/portfolio/BlackJack_Game.png');
const Shotgun = require('./images/portfolio/Shotgun_Game.png');
const FirstWebpage = require('./images/portfolio/First_Webpage.JPG');
const Hotel = require('./images/portfolio/WinForms_HotelApp.JPG');
const Cookbook = require('./images/portfolio/WinForms_Cookbook.JPG');
const Bank = require('./images/portfolio/BankApplication.JPG');
const TextAdventure = require('./images/portfolio/TextAdventure_Game.png');
const Sudoku = require('./images/portfolio/SudokuSolver.JPG');
const Hangman = require('./images/portfolio/Hangman_Game.png');

export var PortfolioProjects = (function(){
    const WeatherInfo = "WeatherApplication made with React. Fetching current weather data and a forecast for today and the next 5 days to come. Option to use Geolocation exists and gets the users current location and shows the weather for that postition.";
    const CurrencyInfo = "CurrencyConverter made with Javascript, CSS, Html. Fetches currencies from API and calculates correct conversion of two currencies.";

    let reactPictures = [Weather, Currency];
    let reactIntros = [WeatherInfo, CurrencyInfo];

    const TomasosInfo = "Webshop for a pizzeria. Made in ASP.NET with database for orders, dishes etc. Uses Core Identity for configuration and using of users.";
    const BlogInfo = "Blog made with ASP.NET. Uses a database for storing, adding, removing blogposts and comments.";

    let aspNetPictures = [Tomasos, Blog];
    let aspNetIntros = [TomasosInfo, BlogInfo];

    const BlackjackInfo = "Black jack game made with Javascript, CSS, Html. Has a basic login and stores previous results of the users in a database. Using node.js. (Not the database version in GIF.)";
    const ShotgunInfo = "Shotgun game. Works kindoff like Rock, paper, scissors. Made with Javascript, CSS, Html.";
    const FirstWebpageInfo = "My first webpage. Made with CSS and Html. Contains information about myself with PDF links to resume and personal letter.";

    let jsHtmlCssPictures = [Blackjack, Shotgun, FirstWebpage];
    let jsHtmlCssIntros = [BlackjackInfo, ShotgunInfo, FirstWebpageInfo];

    const CameraInfo = "CameraSystem made in C# with 4 designpatterns implemented. Factory, Observer, IOC and Singleton.";
    const HotelInfo = "HotelApplication made with Winforms. Handles bookings for customers and customers. Uses a database for storage. Checks invoice and datechecks.";
    const CookBookInfo = "CookBookApplication that handles different recipes. Made with Winforms.";
    const BankInfo = "BankApplication, has a bunch of different options for customers. Console application made in C#.";
    const TextAdventureInfo = "TextAdventure game, basic console application made in C#. Contains different puzzle the user has to solve to beat the game.";
    const SudokuInfo = "SudokuSolver. Console application that solves Sudokupuzzles. Made in C#.";
    const HangmanInfo = "Hangman game, simple console application made in C#.";

    let CsharpPictures = [Camera, Hotel, Cookbook, Bank, TextAdventure, Sudoku, Hangman];
    let CsharpIntros = [CameraInfo, HotelInfo, CookBookInfo, BankInfo, TextAdventureInfo, SudokuInfo, HangmanInfo];

    let react = [reactIntros, reactPictures];
    let aspNet = [aspNetIntros, aspNetPictures];
    let jsHtmlCss = [jsHtmlCssIntros, jsHtmlCssPictures];
    let csharp = [CsharpIntros, CsharpPictures];
    let categories = [react, aspNet, jsHtmlCss, csharp];

    return categories;
})();