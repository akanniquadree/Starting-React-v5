import React from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slider.css'; 

export class Carousel extends React.Component {  
    render() {  
        let settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
                <div className='small-container' >        
                    <div className="row" style={{marginBottom: "20px"}} >        
                         <div className="col-sm">        
                             The joy we derive in taking care of your vehicle  
                         </div>        
                    </div>    
                </div>  
                <Slider {...settings} >  
                    <div className="wdt">  
                         <img  className="img" src={'./img/1.jpg'}className="img"/>  
                    </div>  
                    <div className="wdt">  
                         <img style={{"height":"40px"}}   src= 'img/2.jpg' className="img"/>  
                    </div>  
                    <div className="wdt">  
                         <img  className="img" src= {'img/3.jpg'} className="img"/>  
                    </div>  
                    <div className="wdt">  
                         <img  className="img" src= {'img/4.jpg'} className="img"/>  
                    </div >  
                    <div className="wdt">  
                         <img  className="img" src= {'img/5.jpg'} className="img"/>  
                    </div>  
                    <div className="wdt">  
                         <img  className="img" src= {'img/6.jpg'} className="img"/>  
                    </div>  
                </Slider>  
            </div>  
          );  
        }  
      }  
  
export default Carousel;