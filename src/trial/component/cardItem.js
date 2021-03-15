import React from "react";
import {Link} from "react-router-dom";

 function CardItems (props){
     return(
         <>
            <li className="card_items">
                <Link className="card_items_links" to={props.path}>
                    <figure className="card_items_pics-wrap" dat-category={props.label}>
                        <img src={props.src} alt="" className="card_items_img"/>
                    </figure>
                    <div className="card_items_info">
                        <h5 className="card_items_text">{props.text}</h5>
                    </div>
                </Link>
            </li>
         </>
     )
 } 
 export default CardItems;