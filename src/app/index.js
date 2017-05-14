/**
 * Created by ranji on 5/13/2017.
 */

import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import AwesomeComponent from  "./components/AwesomeComponent";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }

    onGreet() {
        alert("Hello!!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Home
                    name={"max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }

        return (
            <div className="container">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homeLink={this.state.homeLink}/>
                </div>
                {/*<p>sudin Ranjitkar</p>*/}
                <div className="col-xs-10 col-xs-offset-1">
                    {homeCmp}
                </div>

                <div className="col-xs-10 col-xs-offset-1">
                    <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                </div>
                {/*<div className="col-xs-10 col-xs-offset-1">
                 <p>Counting the number of likes</p>
                 <AwesomeComponent/>
                 </div>*/}
            </div>
        );
    }
}
/*window.document.getElementById("name of class")
 * is used to render the contents of app class in the browser*/
render(<App/>, window.document.getElementById("app"));