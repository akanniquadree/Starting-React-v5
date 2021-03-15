import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./searchContext";

class SearchBox extends React.Component{
    handleFormSubmit= (e) => {
        e.preventDefualt();
        this.props.Search()
    }
    render(){
        return (
            <Consumer>
                {context => (
                     <div className="search-params">
                         <form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="location">
                            Location
                            <input onChange={context.handleLocationChange} id="location"  value={context.location} placeholder="Location"/>
                        </label>
                        <label htmlFor="animal">
                            Animal
                            <select onChange={context.handleAnimalChange} onBlur={context.handleAnimalChange} id="animal" value={context.animal}>
                                <option/>
                                {
                                    ANIMALS.map(animal => (
                                        <option key= {animal} value={animal}>
                                            {animal}
                                        </option> 
                                    ))
                                }
                                    </select>
                                        <option>
    
                                        </option>
                                        </label>
                                        <label htmlFor="breed">
                                            Breed
                                        <select id="breed" value={context.breed} onChange={context.handleBreedChange} onBlur={context.handleBreedChange} disabled={context.breeds.length === 0 }>
                                        <option/>
                                            {
                                            context.breeds.map(breed => (
                                            <option key={breed} value={breed}>
                                                {breed}
                                            </option>
                                    ))
                                }
                            </select>
                        </label>
                        <button>Submit</button>
                        </form>
                 </div>  
                )}
               
        </Consumer>
        );
    }
}
export default SearchBox;