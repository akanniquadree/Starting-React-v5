import React from "react";
import {Link} from "@reach/router";
// const Pet = (props) => {
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.animal}</h1>
//             <h1>{props.breed}</h1>
//         </div>
//     )
// }
class Pet extends React.Component{
    render(){
        const {name, animal, breed, media, location, id}= this.props;

        let photo = [];

        if (media && media.photos && media.photos.photo){
            photo = media.photos.photo.filter(photo => photo["@size"] == 'pn')
        }
        const hero = photo [0] ? photo [0].value : "http//placeorgi.com/300/300";
        return(
            <Link to={`/detail/${id}`} className="pet">
                <div className="image-container">
                    <img src={photo[0].value} alt={name}/>
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>
                        {animal} - {breed} - {location}
                    </h2>
                </div>
            </Link>
        )
    }
}
export default Pet;