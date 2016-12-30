import React from "react";
import MainApplication from "../../common/MainApplication.jsx";

export default class MainBody extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div id="main-body" className="main-body-panel">
                <div id="main-renderer" class="panel"></div>
            </div>
        );
    }
}