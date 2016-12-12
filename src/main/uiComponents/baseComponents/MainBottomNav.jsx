import React from "react";

export default class MainBottomNav extends React.Component {
    constructor() {
        super();
    }
    onClick(){
        //redux event handling
    }
    render(){
        return (
            <div id="main-bottom-nav" className="main-bottom-nav-panel">
                <div className="nav-panel-footer">
                    <div className="navigation-bar">
                        <div className="search-action-container">
                            <span className="tab left-tab"></span>
                            <span className="tab center-tab"></span>
                            <span className="tab right-tab"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}