import React from "react";
import { Welcome } from "./Welcome";


export class InteractiveWelcome extends React.Component {
   state = {
    username: ""
   }

   handleInputChange = (event) => {
    const value = event.target.value
    this.setState({
        username: value
    })
   }

    render() {
        return (
            <>
            <h1>My from</h1>
            <input value={this.state.username} onChange={this.handleInputChange} type="text" name="username"  />
            <Welcome name={this.state.username}/>
            </>
        )
    }
}