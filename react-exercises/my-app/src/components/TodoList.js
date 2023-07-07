import React from "react";

export class TodoList extends React.Component {
    state = {
        name: [],
        inputValue: ""
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue : event.target.value,
        })
    }

    handleBtnClick = () => {
        this.setState({
            name: [...this.state.name, this.state.inputValue],
            inputValue: ""
        })
    }

    handleClearArray = () => {
        this.setState({
            name: [],
            inputValue: ""
        })
    }

    handleRemoveTodo = (toRemove)=>{
        this.state.name.splice(toRemove,1)
        this.setState((state) => {
            return {
                name: state.name 
            }
        })
      }

    render(){
        return(
            <div>
            <form>
                <input name="inputData" type="text" onChange={this.handleInputChange} value={this.state.inputValue}/>
                <button type="button" onClick={this.handleBtnClick} disabled={!this.state.inputValue}>Send</button>
                <button type="button" onClick={this.handleClearArray} >Clear</button>
            </form>
            {this.props.render(this.state.name,this.handleRemoveTodo)}               
            </div>

        )
    }
}