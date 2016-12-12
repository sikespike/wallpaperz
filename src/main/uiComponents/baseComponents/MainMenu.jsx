/**
 * Created by xif on 26/11/16.
 */
import React from "react";

export default class MainNav extends React.Component {
    constructor() {
        super();
    }
    onClick(){
        //redux event handling
    }
    render(){
        return (
            <div id="main-menu-wrapper" className="float-menu-panel">
                <div id="menu-button" className="main-menu-icon">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
        );
    }
}