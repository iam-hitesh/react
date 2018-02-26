import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import speakers from './list'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            speakers : speakers,
        }

        // Binds the functions to this this (app component)
        this.removeItem = this.removeItem.bind(this);
    }

    // Remove from list function
    // Same with the Arrow Function
    removeItem(id){
        const isNotId = (item) => item.id !== id;
        const updatedList = this.state.speakers.filter(isNotId);
        this.setState({ speakers : updatedList});
        
        // OR //
//         removeItem(id){
//         const updatedList = this.state.speakers.filter((item) => item.id !== id);
//         this.setState({ speakers : updatedList});
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Hello World</h1>
                </header>
                    {
                       this.state.speakers.map( item =>
                           <div key={item.id}>
                               <h1 className="App-intro"> {item.name} </h1>
                               <p> by {item.reknown}</p>
                               { /* To use this keywords we should use the arrow function not the old functions */ }
                               <button type="button" onClick={() => this.removeItem(item.id)}>Remove</button>
                           </div>
                       )
                    }
            </div>
        );
    }
}

export default App;
