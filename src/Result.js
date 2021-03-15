import React from "react";
import Pet  from "./pet";
import pf from "petfinder-client";
import SearchBox from "./SearchBox";
import { Consumer } from "./searchContext";

const petfinder = pf({
key: process.env.API_KEY,
secret: process.env.API_SECRET,
})

class Result extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            pets: [],
            // quadri: 'senior dev',
            // tech: ['clement', 'peter', 'johnson', 'biodun'],
        }
    }
    componentDidMount(){
        this.search();
    }
    search = () => {
        petfinder.pet.find({output: "full", location: this.props.searchParams.location,
        animal: this.props.SearchParams.animal, breed: this.props.searchParams.breed

    })
    .then(data => {
        let pets;
        if(data.petfinder.pets && data.petfinder.pets.pet){
            if(Array.isArray(data.petfinder.pets.pet)){
                pets = data.petfinder.pets.pet;
            }else {
                pets = [data.petfinder.pets.pet]
            }
        }else {
            pets = []
        }
        this.setState({
            pets
        })
    });
}

// clickHandle() {
//     alert("you click the tile!.....")
// }
    
 render()
  { 

   return( 
        <div className="search">
            <SearchBox search={this.search}/>
            {this.state.pets.map(pet =>{
                let breed;  

                if (Array.isArray(pet.breeds.breed)) {
                    breed = pet.breeds.breed.join(", ");
                }else{
                   breed = pet.breeds.breed;
                }
                return <Pet
                key = {pet.id}
                animal = {pet.animal}  
                name = {pet.name}
                breed = {breed}
                media = {pet.media}
                location = {`${pet.contact.city}, ${pet.contact.state}`}
                id = {pet.id}
                />
            })}
        </div>
    )
    //   return React.createElement ('div', {},[
    //     React.createElement('h1', { onClick: this.clickHandle}, 'Adopt Me!'),
    //     React.createElement(Pet, {
    //         name: 'Mopol',
    //         animal: 'Dog',
    //         breed: 'Japanese',
    //     }),
    //     React.createElement(Pet, {
    //         name: 'Hodd',
    //         animal: 'Bird',
    //         breed: 'Mixed',
    //     }),
    //     React.createElement(Pet, {
    //         name: 'Jack',
    //         animal: 'Tom',
    //         breed: 'Proper',
    //     }),
    //     ])
    }
}
export default function ResultWithContext(props){
    return(
        
            <Consumer>
                {context => <Result {...props} searchParams={context}/>}
            </Consumer>
        
    )
};