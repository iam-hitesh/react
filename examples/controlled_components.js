function searched(searchTerm){
    return function(item){
        return !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
}
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            speakers : speakers,
            searchTerm: '',
        }

        // Binds the functions to this this (app component)
        this.removeItem = this.removeItem.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    // Remove from list function
    // Same with the Arrow Function
    removeItem(id){
        const updatedList = this.state.speakers.filter((item) => item.id !== id);
        this.setState({ speakers : updatedList});
    }

    searchItem(event){
        this.setState({ searchTerm : event.target.value});
    }

    render(){
        const {speakers, searchTerm} = this.state;
        return(
            <div className="App">
                <header className="App-header">
                    <form>
                        <input type="text" onChange={this.searchItem} value={searchTerm}/>
                    </form>
                </header>
                    {
                       this.state.speakers.filter(searched(this.state.searchTerm)).map( item =>
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
