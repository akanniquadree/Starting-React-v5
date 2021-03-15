import React from "react";
import ReactDOM from "react-dom";
import {Router, Link} from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./searchContext";
import Result from "./Result";
import Detail from "./Detail";
import SearchParams from "./SearchParams";
const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET,
    });
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location:"SEATTLE, WA",
            animal:"",
            breed:"",
            breeds:[],
            handleBreedChange: this.handleBreedChange,
            handleAnimalChange: this.handleAnimalChange,
            handleLocationChange: this.handleLocationChange,
            getBreeds: this.getBreeds
        };
    }
    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })
    };
    handleAnimalChange = e =>{
        this.setState({
            animal: e.target.value,
            breed: ""
        }, this.getBreeds)
    };
    handleBreedChange = e =>{
        this.setState({
            breed: e.target.value
        })
    }
    getBreeds () {
            if(this.state.animal){
                petfinder.breed.list({animal: this.state.animal}).then(data => {
                    if(data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)){
                        this.setState({
                            breeds: data.petfinder.breeds.breed
                        });
                    }else {this.setState({breeds: [] })};
                })
            }else{
                this.setState({breeds: [] })
            }
    
    }
 render()
  { 

   return( 
        <div>
            <header>
                <Link to={`/`}>
                    Adopt Me!
                </Link>
            </header>
                <Provider value={this.state}>
                    <Router>
                        <Result path="/"/>
                        <Detail path="/detail/:id"/>
                        <SearchParams path="/search-params"/>
                    </Router>
                </Provider>
        </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))