/**
 * Created by ranji on 5/13/2017.
 */

import React from "react";
import PropTypes from "prop-types";
export class  Home extends React.Component{
    render(){
        console.log(this.props);
        var text="test from home component";
        return (

            <div>
                <p>New Component!</p>
                <p>{text}</p>
                <p>My name is {this.props.name}, My age is {this.props.age}</p>
                <p>User Object => Name:{this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>
                    <hr/>
                    {this.props.children}

                </div>
                {/*{ within this curly braces we can run javascript codes }*/}
            </div>
        );
    }
}

Home.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    children:PropTypes.element
};
