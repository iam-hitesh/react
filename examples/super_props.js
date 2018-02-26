class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            speakers : speakers,
        }
    }
    render(){
        // console.log(this);
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
                           </div>
                       )
                    }
            </div>
        );
    }
}
