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
            status: 0,
            homeLink: props.initialLinkName
        };

        /*this setTimeOut function is used to update the status to 1 after 3 sec*/
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000)
        console.log("Constructor");
    }

/*Component Life Cycle*/
    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("Component did Mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive Props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update", nextProps, nextState);
     /*   if (nextState.status===1){
            return false;
        }*/
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will Update", nextProps, nextState);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Mount", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component WIll Unmount");
    }
    /*Component Life Cycle End*/

    /*this function is used to add the age by +3 and make live update in the browser without any update*/
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    /*this function is used to change the state of home link to the target value*/
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

/**
 * There is some difference in using React.PropTypes.string and PropTypes.string
 * @type {{name: *, initialAge: *}}
 */
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};
