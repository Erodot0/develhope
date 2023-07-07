import "./index.css"
import React from "react";
import { DisplayLanguage } from "./components/DisplayLanguage";


export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <DisplayLanguage />
            </div>
        )
    }
}