import React from 'react';
import { Intro } from './components/Intro';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = { isShowing: false, img: "" };
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        console.log(this.state.img);
        return (
            <div className="pageContent">
                <Intro />
                <NavBar />
                <About />
                <Portfolio isShowing={this.state.isShowing} close={this.closeModalHandler} open={this.openModalHandler} />
                <Contact />
            </div>
        );
    }
}