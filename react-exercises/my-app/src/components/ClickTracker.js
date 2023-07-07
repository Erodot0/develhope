import React from "react";

export class ClickTracker extends React.Component {
    state = {
        buttonPressed: ""
    }
    handleButtonClick = (event) => {
        this.setState(() => {
            return {
                buttonPressed: event.target.textContent
            }
        })
    }
    
    render() {
        return (
            <>
            <button onClick={this.handleButtonClick}>btn 1</button>
            <button onClick={this.handleButtonClick}>btn 2</button>
            <button onClick={this.handleButtonClick}>btn 3</button>
            <p>Button: {this.state.buttonPressed}</p>
            </>            
        )    
    } 
}