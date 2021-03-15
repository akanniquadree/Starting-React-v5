import React from "react";
import CardItems from "./cardItem";
import "./card.css";

function Card() {
    return(
        <div className="cards">
            <h1>Lorem Ipsum is simply dummy text of the printing</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="class_items">
                        <CardItems src="images/image1.jpg" text="It is a long established fact that a reader"
                        label="Wash us" path="/services"/>
                    </ul>
                    <ul className="class_items">
                        <CardItems src="images/image1.jpg" text="It is a long established fact that a reader"
                        label="Wash us" path="/services"/>
                    </ul>
                    <ul className="class_items">
                        <CardItems src="component/img/1.jpg" text="It is a long established fact that a reader"
                        label="Wash us" path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;