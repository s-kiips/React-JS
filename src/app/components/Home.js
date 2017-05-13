/**
 * Created by ranji on 5/13/2017.
 */


/**
 * PropTypes are imported from "prop-types" instead of "react"
 */
import React from "react";
import PropTypes from "prop-types";
export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status:0
        };

        /*this setTimeOut function is used to update the status to 1 after 3 sec*/
        setTimeout(()=>{
            this.setState({
                status: 1
            });
        } ,3000)
    }

    /*this function is used to add the age by +3 and make live update in the browser without any update*/
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        console.log(this.props);
        var text = "test from home component";
        return (

            <div>
                <p>New Component!</p>
                <p>{text}</p>
                <p>My name is {this.props.name}, My age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make Me Older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};
