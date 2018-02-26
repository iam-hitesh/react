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
    removeItem(id){
        // Using the javascript filter method
        // We can filter out the removed item and render the updated list
        function isNotId(item){
            return item.id !== id;
        }

        // Create a new Updated List by filtering out all elements except the id passed
        const updatedList = this.state.speakers.filter(isNotId);
        // Assign the new updated list to the list using setState method
        this.setState({speakers : updatedList});

        // In this method we remove out the item from the list which id passed and update the list by this.setState
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
