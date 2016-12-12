/**
 * Created by xif on 26/11/16.
 */
import React from "react";
import MainNav from "./baseComponents/MainNav.jsx";
import MainBody from "./baseComponents/MainBody.jsx";
import MainBottomNav from "./baseComponents/MainBottomNav.jsx";
import MainMenu from "./baseComponents/MainMenu.jsx";

export default class MainContainer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="main-container" className="main-panel">
                <MainNav title="WallpaperZ" />
                <MainBody />
                <MainBottomNav />
                <MainMenu />
            </div>
        );
    }
}
