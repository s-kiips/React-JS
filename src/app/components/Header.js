/**
 * Created by ranji on 5/13/2017.
 */
import React from "react";


/**
 *  class is replaced to const and extends is replaced with props args which makes this component stateless
 *  render function must be removed as the component is stateless and we are not rendering anything
 * @param props
 * @returns {XML}
 * @constructor
 */
export const Header = (props)=>{

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };