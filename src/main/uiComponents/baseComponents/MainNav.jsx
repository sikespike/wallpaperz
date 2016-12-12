/**
 * Created by xif on 26/11/16.
 */
import React from "react";

export default class MainNav extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return (
            <div id="main-nav" className="main-nav-panel">
                <span className="view-panel-name">{this.props.title}</span>
            </div>
        );
    }
}