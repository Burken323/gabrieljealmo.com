import React from 'react';
import { Intro } from './components/Intro';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact'

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = { position: 0 };
    }

    render(){
        return (
            <div className="pageContent">
                <Intro />
                <NavBar />
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}