import React from 'react';
import ReactDOM from 'react-dom';
import {browserRoute as Router} from "react-router-dom";
import Route from "react-router-dom";
// import {Router, Route, browserHistory, IndexRoute} from "react-router";
// import Root from "./root";
// import Home from "./component/pages/Home";
// import "./style.css";

class App extends React.Component() {
    render(){
        return(
                <Router>
                    <div>
                         <Route path="/" render={()=>{
                                return(
                                    <h1>Welcome home</h1>
                                    )
                            }
                        }/>
                    </div>     
                </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));