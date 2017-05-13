/**
 * Created by ranji on 5/13/2017.
 */

import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import AwesomeComponent from  "./components/AwesomeComponent";

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
                {/*<p>sudin Ranjitkar</p>*/}
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                <div className="col-xs-10 col-xs-offset-1">
                    <p>Counting the number of likes</p>
                    <AwesomeComponent/>
                </div>
            </div>
        );
    }
}
render(<App/>,window.document.getElementById("app"));